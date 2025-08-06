// src/components/GeekTerminal.js
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useResize } from '../hooks/useResize';
import { ResizableContainer } from './common/ResizeHandle';

const terminalBlink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const TerminalContainer = styled(motion.div)`
  position: fixed;
  ${props => props.isMaximized ? `
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    transform: none !important;
  ` : `
    top: ${props.top || (window.innerHeight - 320)}px;
    left: ${props.left || (window.innerWidth - 920)}px;
    width: ${props.width || 500}px;
    height: ${props.height || 300}px;
    min-height: 200px;
  `}
  background: #000;
  border: 2px solid #00ff00;
  border-radius: ${props => props.isMaximized ? '0' : '5px'};
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: #00ff00;
  overflow: hidden;
  z-index: 1000;
  cursor: ${props => props.isMaximized ? 'default' : 'move'};

  @media (max-width: 768px) {
    ${props => !props.isMaximized && `
      width: 300px;
      height: 200px;
      right: 10px;
    `}
    font-size: 10px;
  }
`;

const TerminalHeader = styled.div`
  background: #333;
  padding: 5px 10px;
  border-bottom: 1px solid #00ff00;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    color: #00ff00;
    font-weight: bold;
  }

  .controls {
    display: flex;
    gap: 5px;
  }

  .control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;

    &.close { background: #ff5f57; }
    &.minimize { background: #ffbd2e; }
    &.maximize { background: #28ca42; }
  }
`;

const TerminalContent = styled.div`
  padding: 10px;
  height: calc(100% - 40px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #111;
  }

  &::-webkit-scrollbar-thumb {
    background: #00ff00;
    border-radius: 4px;
  }
`;

const TerminalLine = styled(motion.div)`
  margin-bottom: 5px;
  display: flex;

  .prompt {
    color: #0ff;
    margin-right: 5px;
  }

  .command {
    color: #fff;
  }

  .output {
    color: #0f0;
    margin-left: 20px;
  }

  .error {
    color: #f55;
    margin-left: 20px;
  }
`;

const TerminalInput = styled.div`
  display: flex;

  input {
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-family: inherit;
    font-size: inherit;
    flex: 1;
  }

  .cursor {
    width: 8px;
    height: 14px;
    background: #00ff00;
    animation: ${terminalBlink} 1s infinite;
  }
`;

const GeekTerminal = forwardRef(({ gameMode, onActivityClick, onCpuClick, onNotepadClick }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lines, setLines] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ top: window.innerHeight - 320, left: window.innerWidth - 920 });
  const inputRef = useRef(null);
  const contentRef = useRef(null);

  const { size, isResizing, startResize: originalStartResize } = useResize(500, 300, 300, 200, window.innerWidth * 0.9, window.innerHeight * 0.9);

  // Custom resize handler that also handles position for north resizing
  const startResize = (e, direction) => {
    const startPosition = { ...position };
    const startSize = { ...size };

    // Call the original resize handler
    originalStartResize(e, direction);

    // For north resizing, we need to also track position changes
    if (direction === 'n' || direction === 'ne' || direction === 'nw') {
      const startY = e.clientY;

      const handleMouseMove = (e) => {
        const deltaY = e.clientY - startY;
        const newHeight = Math.max(200, startSize.height - deltaY);
        const heightChange = startSize.height - newHeight;

        setPosition(prev => ({
          ...prev,
          top: startPosition.top + heightChange
        }));
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  const commands = {
    help: () => [
      'Available commands:',
      '  help - Show this help',
      '  about - About this portfolio',
      '  skills - List technical skills',
      '  projects - Show projects',
      '  experience - Work experience',
      '  contact - Contact information',
      '  resume - Download resume PDF',
      '  matrix - Toggle Matrix mode',
      '  easter-egg - Find hidden features',
      '  hack - Try to hack the system',
      '  whoami - Identity information',
      '  pwd - Current directory',
      '  ls - List contents',
      '  cat - Display file contents',
      '  clear - Clear terminal',
      '',
      'Dock Applications:',
      '  activity - Open activity monitor',
      '  cpu - Open CPU stats monitor',
      '  notepad - Open hacker notepad'
    ],
    about: () => [
      'Dibyajyoti Pradhan - Senior Software Engineer',
      'Location: London, UK',
      'Current: HubSpot',
      'Experience: 5+ years in tech',
      'Specialization: Full-stack development, System architecture'
    ],
    skills: () => [
      'Programming Languages: C++, Python, Java, JavaScript, TypeScript',
      'Frameworks: React, React Native, Spring MVC, Google Guice',
      'Web Technologies: HTML, CSS, GraphQL',
      'Tools: Git, Docker, Kubernetes, Kafka, AWS',
      'Databases: MySQL, MongoDB, DynamoDB, Vitess DB'
    ],
    projects: () => [
      'Cloud Storage System - Java-based file management',
      'Concurrent Web Crawler - Multi-threaded crawler in Java',
      'Cron Parser - CLI application for cron expressions',
      'Cookie Log Parser - CSV log analysis tool',
      'Pokemon CSS Project - Advanced CSS showcase',
      'Netflix Clone - React & Firebase app'
    ],
    experience: () => [
      'Senior Software Engineer @ HubSpot (07/2024 - Present)',
      'Software Engineer II @ Meta (04/2022 - 05/2024)',
      'Software Development Engineer II @ Amazon (10/2021 - 02/2022)',
      'Software Development Engineer I @ Amazon (07/2019 - 09/2021)',
      'SDE Intern @ Amazon (05/2018 - 07/2018)'
    ],
    contact: () => [
      'Email: dibyojyotipradhan@gmail.com',
      'LinkedIn: dibyajyoti-pradhan-83a649146',
      'GitHub: Dibyajyoti-Pradhan',
      'Location: London, UK'
    ],
    resume: () => {
      // Trigger resume download
      const link = document.createElement('a');
      link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
      link.download = 'Dibyajyoti_Pradhan_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return [
        'Downloading resume...',
        '[████████████████████] 100%',
        '✅ Resume downloaded successfully!',
        '📄 File: Dibyajyoti_Pradhan_Resume.pdf'
      ];
    },
    matrix: () => {
      document.body.style.filter = document.body.style.filter ? '' : 'hue-rotate(120deg) contrast(1.2)';
      return ['Matrix mode toggled! The world looks different now...'];
    },
    'easter-egg': () => [
      '🥚 You found an easter egg!',
      'Fun fact: This portfolio has over 50 interactive elements!',
      'Try typing "konami" for a special surprise...'
    ],
    konami: () => {
      // Trigger special effects
      document.body.style.animation = 'spin 2s ease-in-out';
      setTimeout(() => {
        document.body.style.animation = '';
      }, 2000);
      return ['🎮 KONAMI CODE ACTIVATED! 🎮', 'You are now a certified geek!'];
    },
    hack: () => [
      'Attempting to hack the system...',
      '[████████████████████] 100%',
      'ERROR: Nice try! This portfolio is hack-proof 😎',
      'But you get points for trying!'
    ],
    whoami: () => ['portfolio-visitor'],
    pwd: () => ['/Users/visitor/portfolio-quest'],
    ls: () => ['about.txt', 'skills.md', 'projects/', 'experience.log', 'contact.vcf', 'resume.pdf', 'achievements.json'],
    cat: (args) => {
      const file = args[0];
      if (file === 'about.txt') return ['This is an interactive portfolio by Dibyajyoti Pradhan'];
      if (file === 'skills.md') return ['# Skills', 'JavaScript, React, Python, Java...'];
      if (file === 'resume.pdf') return ['📄 PDF file detected!', 'Use "resume" command to download the file instead.'];
      return [`cat: ${file || 'filename'}: No such file or directory`];
    },
    clear: () => {
      setLines([]);
      return [];
    },
    activity: () => {
      if (onActivityClick) {
        onActivityClick();
        return [
          'Opening Activity Monitor...',
          '[████████████████████] 100%',
          '✅ Activity Monitor launched successfully!',
          '📊 Monitoring system performance...'
        ];
      }
      return ['❌ Activity Monitor not available'];
    },
    cpu: () => {
      if (onCpuClick) {
        onCpuClick();
        return [
          'Launching CPU Stats Monitor...',
          '[████████████████████] 100%',
          '✅ CPU Monitor activated!',
          '💀 Displaying system vitals...'
        ];
      }
      return ['❌ CPU Monitor not available'];
    },
    notepad: () => {
      if (onNotepadClick) {
        onNotepadClick();
        return [
          'Initializing Hacker Notepad...',
          'Loading encryption protocols...',
          '[████████████████████] 100%',
          '✅ notepad.exe launched!',
          '📝 Secure text editor ready for use'
        ];
      }
      return ['❌ Notepad not available'];
    }
  };

  // Expose methods to parent components
  useImperativeHandle(ref, () => ({
    maximize: () => setIsMaximized(true),
    minimize: () => setIsMinimized(true),
    close: () => setIsVisible(false)
  }));

  useEffect(() => {
    if (gameMode) {
      // Always show immediately when gameMode is true (visibility is controlled by parent)
      setIsVisible(true);
      // Auto-start with welcome message
      const welcomeLines = [
        { type: 'output', content: 'Welcome to Portfolio Terminal v2.0' },
        { type: 'output', content: 'Type "help" for available commands' },
        { type: 'output', content: '━'.repeat(50) }
      ];
      setLines(welcomeLines);
    } else {
      setIsVisible(false);
    }
  }, [gameMode]);

  // Auto-scroll to bottom when new lines are added
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [lines]);

  const executeCommand = (input) => {
    const [cmd, ...args] = input.trim().toLowerCase().split(' ');
    const newLine = { type: 'input', content: `$ ${input}` };

    let output = [];
    if (commands[cmd]) {
      const result = commands[cmd](args);
      output = result.map(line => ({ type: 'output', content: line }));
    } else if (input.trim()) {
      output = [{ type: 'error', content: `Command not found: ${cmd}. Type "help" for available commands.` }];
    }

    setLines(prev => [...prev, newLine, ...output]);
    setCurrentInput('');

    // Scroll to bottom after adding new content
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
      }
    }, 50);

    if (window.playSoundEffect) {
      window.playSoundEffect.click();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
    }
  };

  const handleTerminalClick = () => {
    // Focus the input when clicking anywhere in the terminal
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  if (!gameMode || !isVisible) return null;

  return (
    <AnimatePresence>
      <TerminalContainer
        isMaximized={isMaximized}
        width={size.width}
        height={isMinimized ? 40 : size.height}
        top={position.top}
        left={position.left}
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        exit={{ opacity: 0, y: 100, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        drag={!isMaximized && !isResizing}
        dragMomentum={false}
        dragElastic={0.1}
        whileDrag={{ scale: 1.05, zIndex: 1100 }}
        onClick={handleTerminalClick}
        onDrag={(event, info) => {
          if (!isMaximized && !isResizing) {
            setPosition(prev => ({
              top: prev.top + info.delta.y,
              left: prev.left + info.delta.x
            }));
          }
        }}
      >
        {!isMaximized && (
          <ResizableContainer
            handles={['se', 'sw', 'ne', 'nw', 'e', 'w', 's', 'n']}
            onResize={startResize}
          />
        )}
        <TerminalHeader>
          <div className="title">💻 Terminal</div>
          <div className="controls">
            <div className="control minimize" onClick={() => {
              setIsMinimized(!isMinimized);
              if (!isMinimized) setIsMaximized(false); // Exit maximize when minimizing
            }} />
            <div className="control maximize" onClick={() => {
              if (!isMinimized) setIsMaximized(!isMaximized);
            }} />
            <div className="control close" onClick={() => setIsVisible(false)} />
          </div>
        </TerminalHeader>

        {!isMinimized && (
          <TerminalContent ref={contentRef}>
            {lines.map((line, index) => (
              <TerminalLine
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {line.type === 'input' && (
                  <div className="command">{line.content}</div>
                )}
                {line.type === 'output' && (
                  <div className="output">{line.content}</div>
                )}
                {line.type === 'error' && (
                  <div className="error">{line.content}</div>
                )}
              </TerminalLine>
            ))}

            <TerminalInput
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="prompt">$</span>
              <input
                ref={inputRef}
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a command..."
                autoFocus
              />
              <div className="cursor" />
            </TerminalInput>
          </TerminalContent>
        )}
      </TerminalContainer>
    </AnimatePresence>
  );
});

export default GeekTerminal;
