// src/components/HackerNotepad.js
import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaTimes, FaMinus, FaSave, FaFileCode, FaTerminal } from 'react-icons/fa';
import { ResizeHandle } from './common/ResizeHandle';
import { useResize } from '../hooks/useResize';

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const scanlines = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 0 20px; }
`;

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 5px #00ff41, 0 0 10px #00ff41; }
  50% { text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41; }
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const NotepadContainer = styled(motion.div)`
  position: fixed;
  top: ${props => props.top || 100}px;
  left: ${props => props.left || 100}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: linear-gradient(145deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  border: 2px solid #00ff41;
  border-radius: 8px;
  box-shadow:
    0 0 30px rgba(0, 255, 65, 0.4),
    inset 0 0 50px rgba(0, 255, 65, 0.05);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
  overflow: hidden;

  /* Scanlines effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 65, 0.03) 2px,
      rgba(0, 255, 65, 0.03) 4px
    );
    pointer-events: none;
    z-index: 1;
    animation: ${scanlines} 0.1s linear infinite;
  }
`;

const TitleBar = styled.div`
  background: linear-gradient(90deg, #001100, #002200, #001100);
  border-bottom: 1px solid #00ff41;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #00ff41;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: move;
  position: relative;
  z-index: 2;

  .title-left {
    display: flex;
    align-items: center;
    gap: 8px;

    .terminal-icon {
      animation: ${glow} 2s ease-in-out infinite;
    }

    .title-text {
      animation: ${glitch} 3s ease-in-out infinite;
    }
  }

  .title-right {
    display: flex;
    gap: 4px;
  }
`;

const WindowButton = styled.button`
  background: transparent;
  border: 1px solid #00ff41;
  color: #00ff41;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #00ff41;
    color: #000;
    box-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
  }

  &.close:hover {
    background: #ff4444;
    border-color: #ff4444;
    color: #000;
  }

  &.minimize:hover {
    background: #ffaa00;
    border-color: #ffaa00;
    color: #000;
  }
`;

const StatusBar = styled.div`
  background: #000;
  border-top: 1px solid #00ff41;
  padding: 4px 12px;
  color: #00ff41;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;

  .status-left {
    display: flex;
    gap: 15px;
  }

  .cursor-blink {
    animation: ${blink} 1s infinite;
  }
`;

const TextEditor = styled.textarea`
  flex: 1;
  background: transparent;
  border: none;
  color: #00ff41;
  font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
  font-size: 14px;
  padding: 15px;
  resize: none;
  outline: none;
  position: relative;
  z-index: 2;
  line-height: 1.4;

  &::placeholder {
    color: #004d1a;
    font-style: italic;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #000;
    border-left: 1px solid #333;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #00ff41, #00cc33);
    border-radius: 0;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #00cc33, #009900);
  }
`;

const HackerNotepad = ({ isVisible, onClose, onMinimize, isMinimized }) => {
  const { size, isResizing, startResize } = useResize(400, 300, 300, 200, 800, 600);
  const [content, setContent] = useState('');
  const [position, setPosition] = useState({ x: 150, y: 150 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [lastSaved, setLastSaved] = useState(new Date());
  const textareaRef = useRef(null);
  const containerRef = useRef(null);

  // Load saved content on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('hacker-notepad-content');
    const savedPosition = localStorage.getItem('hacker-notepad-position');

    if (savedContent) {
      setContent(savedContent);
    }

    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
  }, []);

  // Auto-save content
  useEffect(() => {
    const saveTimer = setTimeout(() => {
      localStorage.setItem('hacker-notepad-content', content);
      setLastSaved(new Date());
    }, 1000);

    return () => clearTimeout(saveTimer);
  }, [content]);

  // Save position
  useEffect(() => {
    localStorage.setItem('hacker-notepad-position', JSON.stringify(position));
  }, [position]);

  const handleMouseDown = (e) => {
    if (e.target.closest('.title-right') || isResizing) return;

    setIsDragging(true);
    const rect = containerRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleSave = () => {
    localStorage.setItem('hacker-notepad-content', content);
    setLastSaved(new Date());

    // Create download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hacker-notes-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getLineCount = () => {
    return content.split('\n').length;
  };

  const getCharCount = () => {
    return content.length;
  };

  const getCursorPosition = () => {
    if (!textareaRef.current) return { line: 1, col: 1 };

    const textarea = textareaRef.current;
    const textBeforeCursor = content.substring(0, textarea.selectionStart);
    const lines = textBeforeCursor.split('\n');

    return {
      line: lines.length,
      col: lines[lines.length - 1].length + 1
    };
  };

  if (!isVisible) return null;

  return (
    <NotepadContainer
      ref={containerRef}
      width={size.width}
      height={size.height}
      top={position.y}
      left={position.x}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isMinimized ? 0.3 : 1,
        scale: isMinimized ? 0.8 : 1,
        height: isMinimized ? 40 : size.height
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      drag={false}
    >
      <TitleBar onMouseDown={handleMouseDown}>
        <div className="title-left">
          <FaTerminal className="terminal-icon" />
          <span className="title-text">notepad.exe</span>
        </div>
        <div className="title-right">
          <WindowButton onClick={handleSave} title="Save & Download">
            <FaSave />
          </WindowButton>
          <WindowButton className="minimize" onClick={onMinimize} title="Minimize">
            <FaMinus />
          </WindowButton>
          <WindowButton className="close" onClick={onClose} title="Close">
            <FaTimes />
          </WindowButton>
        </div>
      </TitleBar>

      {!isMinimized && (
        <>
          <TextEditor
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="// Enter your hacker notes here...
// System access logs, exploit findings, network mappings...
// All data is encrypted and stored locally.

> initialize_session()
> accessing_mainframe...
> connection_established ✓"
            spellCheck={false}
          />

          <StatusBar>
            <div className="status-left">
              <span>LN {getCursorPosition().line}, COL {getCursorPosition().col}</span>
              <span>LINES: {getLineCount()}</span>
              <span>CHARS: {getCharCount()}</span>
            </div>
            <div>
              <span>LAST_SAVED: {lastSaved.toLocaleTimeString()}</span>
              <span className="cursor-blink"> █</span>
            </div>
          </StatusBar>

          <ResizeHandle onMouseDown={startResize} />
        </>
      )}
    </NotepadContainer>
  );
};

export default HackerNotepad;
