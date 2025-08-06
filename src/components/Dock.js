// src/components/Dock.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 255, 0, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 0, 0.8); }
`;

const DockContainer = styled(motion.div)`
  position: fixed;
  right: 20px;
  top: 50vh;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid #00ff00;
  border-radius: 15px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 100;
  height: auto;
  max-height: 90vh;
  box-shadow:
    0 0 30px rgba(0, 255, 0, 0.3),
    inset 0 0 20px rgba(0, 255, 0, 0.1);

  @media (max-width: 768px) {
    right: 10px;
    top: 50vh;
    padding: 12px 8px;
    gap: 8px;
    max-height: 95vh;
  }
`;

const DockIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  background: linear-gradient(145deg, rgba(0, 255, 0, 0.1), rgba(0, 255, 0, 0.2));
  border: 2px solid #00ff00;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-family: 'Courier New', monospace;

  &:hover {
    transform: scale(1.2) translateX(-10px);
    animation: ${glow} 1s infinite;
    background: linear-gradient(145deg, rgba(0, 255, 0, 0.2), rgba(0, 255, 0, 0.3));
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  .icon {
    font-size: 24px;
    margin-bottom: 2px;
  }

  .label {
    font-size: 8px;
    color: #00ff00;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-shadow: 0 0 5px rgba(0, 255, 0, 0.8);
  }

  ${props => props.isActive && `
    background: linear-gradient(145deg, rgba(0, 255, 0, 0.3), rgba(0, 255, 0, 0.4));
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.6);

    &::after {
      content: '';
      position: absolute;
      left: -5px;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background: #00ff00;
      border-radius: 50%;
      box-shadow: 0 0 8px rgba(0, 255, 0, 0.8);
    }
  `}

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;

    .icon {
      font-size: 20px;
    }

    .label {
      font-size: 7px;
    }
  }
`;

export default function Dock({
  onTerminalClick,
  onActivityClick,
  onCpuClick,
  onNotepadClick,
  terminalVisible,
  activityVisible,
  cpuVisible,
  notepadVisible
}) {


  return (
    <DockContainer
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <DockIcon
        isActive={terminalVisible}
        onClick={onTerminalClick}
        whileHover={{ scale: 1.2, x: -10 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="icon">💻</div>
        <div className="label">Terminal</div>
      </DockIcon>

      <DockIcon
        isActive={activityVisible}
        onClick={onActivityClick}
        whileHover={{ scale: 1.2, x: -10 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="icon">⚡</div>
        <div className="label">Activity</div>
      </DockIcon>

      <DockIcon
        isActive={cpuVisible}
        onClick={onCpuClick}
        whileHover={{ scale: 1.2, x: -10 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="icon">💀</div>
        <div className="label">CPU</div>
      </DockIcon>

      <DockIcon
        isActive={notepadVisible}
        onClick={onNotepadClick}
        whileHover={{ scale: 1.2, x: -10 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="icon">📝</div>
        <div className="label">Notepad</div>
      </DockIcon>
    </DockContainer>
  );
}
