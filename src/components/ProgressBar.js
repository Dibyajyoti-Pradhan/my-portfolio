// src/components/ProgressBar.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useResize } from '../hooks/useResize';
import { ResizableContainer } from './common/ResizeHandle';

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px #00ff41; }
  50% { box-shadow: 0 0 40px #00ff41, 0 0 60px #00cc33; }
`;

const ProgressContainer = styled(motion.div)`
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
    top: ${props.top || 80}px;
    left: ${props.left || Math.max(20, window.innerWidth - 320)}px;
    width: ${props.width || 300}px;
    height: ${props.height || 350}px;
    min-height: 250px;
  `}
  background: linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  border: 2px solid #00ff41;
  border-radius: ${props => props.isMaximized ? '0' : '0'};
  padding: ${props => props.isMinimized ? '0' : '20px'};
  padding-top: 0;
  z-index: 1000;
  animation: ${glow} 3s ease-in-out infinite;
  font-family: 'Courier New', monospace;
  overflow: hidden;
  cursor: ${props => props.isMaximized ? 'default' : 'move'};

  @media (max-width: 768px) {
    width: ${props => props.isMaximized ? '100vw' : (props.width || 250)}px;
    height: ${props => props.isMaximized ? '100vh' : (props.height || 300)}px;
  }
`;

const ProgressHeader = styled.div`
  background: #333;
  padding: 5px 10px;
  border-bottom: 1px solid #00ff41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 -20px 15px -20px;

  .title {
    color: #00ff41;
    font-weight: bold;
    font-size: 12px;
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

const ProgressContent = styled.div`
  padding: ${props => props.isMinimized ? '0' : '20px'};
  height: ${props => props.isMinimized ? '0' : 'calc(100% - 40px)'};
  overflow-y: auto;
  overflow: ${props => props.isMinimized ? 'hidden' : 'visible'};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #111;
  }

  &::-webkit-scrollbar-thumb {
    background: #00ff41;
    border-radius: 4px;
  }
`;



const ProgressBarContainer = styled.div`
  width: 100%;
  height: 12px;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 0;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #003300, #00ff41, #00cc33);
  background-size: 200% 100%;
  animation: shimmer 2s ease-in-out infinite;
  border-radius: 0;
  position: relative;
  box-shadow: 0 0 10px #00ff41;

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(0,255,65,0.6), transparent);
    animation: slide 1.5s ease-in-out infinite;
  }

  @keyframes slide {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  color: #00ff41;
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;

  .label {
    opacity: 0.8;
    color: #888;
  }

  .value {
    color: #00ff41;
    font-weight: bold;
    text-shadow: 0 0 5px #00ff41;
  }
`;

const Badge = styled(motion.div)`
  display: inline-block;
  background: linear-gradient(45deg, #003300, #00ff41);
  color: #000;
  padding: 4px 8px;
  border: 1px solid #00ff41;
  border-radius: 0;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 2px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
`;

export default function ProgressBar({ gameMode }) {
  const { size, isResizing, startResize: originalStartResize } = useResize(300, 350, 250, 250, 500, 600);
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({
    top: 80,
    left: Math.max(20, window.innerWidth - 320)
  });

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
        const newHeight = Math.max(250, startSize.height - deltaY);
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

  const [progress, setProgress] = useState(0);
  const [stats, setStats] = useState({
    sectionsVisited: 0,
    timeSpent: 0,
    clickCount: 0,
    scrollDistance: 0
  });
  const [badges, setBadges] = useState([]);

  // Handle window resize to keep proper alignment
  useEffect(() => {
    const handleResize = () => {
      setPosition(prev => ({
        ...prev,
        left: Math.max(20, window.innerWidth - 320)
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!gameMode) return;

    let startTime = Date.now();
    let clickCount = 0;
    let scrollDistance = 0;
    let lastScrollY = window.scrollY;

    const updateProgress = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      const newProgress = Math.min((timeSpent + clickCount * 2 + scrollDistance / 100) / 100 * 100, 100);

      setProgress(newProgress);
      setStats(prev => ({
        ...prev,
        timeSpent,
        clickCount,
        scrollDistance: Math.floor(scrollDistance)
      }));

      // Award badges
      const newBadges = [];
      if (timeSpent > 30 && !badges.includes('Explorer')) newBadges.push('Explorer');
      if (clickCount > 10 && !badges.includes('Clicker')) newBadges.push('Clicker');
      if (scrollDistance > 1000 && !badges.includes('Scroller')) newBadges.push('Scroller');
      if (newProgress > 50 && !badges.includes('Half Way')) newBadges.push('Half Way');
      if (newProgress >= 100 && !badges.includes('Completionist')) newBadges.push('Completionist');

      if (newBadges.length > 0) {
        setBadges(prev => [...prev, ...newBadges]);
        if (window.playSoundEffect) {
          window.playSoundEffect.success();
        }
      }
    };

    const handleClick = () => {
      clickCount++;
      if (window.playSoundEffect) {
        window.playSoundEffect.click();
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDistance += Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(updateProgress, 1000);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [gameMode, badges]);

  if (!gameMode || !isVisible) return null;

  return (
    <ProgressContainer
      isMaximized={isMaximized}
      width={size.width}
      height={isMinimized ? 40 : size.height}
      top={position.top}
      left={position.left}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      drag={!isMaximized && !isResizing}
      dragMomentum={false}
      dragElastic={0.1}
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
      <ProgressHeader>
        <div className="title">⚡ ACTIVITY</div>
        <div className="controls">
          <div className="control minimize" onClick={() => {
            setIsMinimized(!isMinimized);
            if (!isMinimized) setIsMaximized(false);
          }} />
          <div className="control maximize" onClick={() => {
            if (!isMinimized) setIsMaximized(!isMaximized);
          }} />
          <div className="control close" onClick={() => setIsVisible(false)} />
        </div>
      </ProgressHeader>

      {!isMinimized && (
        <ProgressContent isMinimized={isMinimized}>

      <ProgressBarContainer>
        <ProgressFill
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </ProgressBarContainer>

      <StatItem>
        <span className="label">Progress:</span>
        <span className="value">{Math.floor(progress)}%</span>
      </StatItem>

      <StatItem>
        <span className="label">Time Spent:</span>
        <span className="value">{stats.timeSpent}s</span>
      </StatItem>

      <StatItem>
        <span className="label">Interactions:</span>
        <span className="value">{stats.clickCount}</span>
      </StatItem>

      <StatItem>
        <span className="label">Scroll Distance:</span>
        <span className="value">{stats.scrollDistance}px</span>
      </StatItem>

      {badges.length > 0 && (
        <div style={{ marginTop: '15px' }}>
          <div style={{
            color: '#00ff41',
            fontSize: '0.9rem',
            marginBottom: '5px',
            fontFamily: 'Courier New, monospace',
            textTransform: 'uppercase',
            textShadow: '0 0 5px #00ff41'
          }}>
            🏆 ACHIEVEMENTS:
          </div>
          {badges.map((badge, index) => (
            <Badge
              key={badge}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {badge}
            </Badge>
          ))}
        </div>
      )}
        </ProgressContent>
      )}
    </ProgressContainer>
  );
}
