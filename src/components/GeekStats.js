// src/components/GeekStats.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useResize } from '../hooks/useResize';
import { ResizableContainer } from './common/ResizeHandle';

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 5px #00ff00; }
  50% { text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00; }
`;

const flicker = keyframes`
  0%, 100% { opacity: 1; }
  2% { opacity: 0.8; }
  4% { opacity: 1; }
  8% { opacity: 0.9; }
  10% { opacity: 1; }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(400px); }
`;

const StatsContainer = styled(motion.div)`
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
    top: ${props.top || (window.innerHeight - 620)}px;
    left: ${props.left || 20}px;
    width: ${props.width || 280}px;
    height: ${props.height || 600}px;
    min-height: 400px;
  `}
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.95), rgba(0, 20, 0, 0.9));
  border: 1px solid #00ff00;
  border-radius: ${props => props.isMaximized ? '0' : '0'};
  padding: ${props => props.isMinimized ? '0' : '20px 15px'};
  padding-top: 0;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 11px;
  color: #00ff00;
  z-index: 1000;
  box-shadow:
    0 0 30px rgba(0, 255, 0, 0.3),
    inset 0 0 20px rgba(0, 255, 0, 0.05);
  overflow: hidden;
  animation: ${flicker} 3s infinite;
  cursor: ${props => props.isMaximized ? 'default' : 'move'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ff00, transparent);
    animation: ${scanline} 2s linear infinite;
    opacity: 0.6;
  }

  &::after {
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
      rgba(0, 255, 0, 0.03) 2px,
      rgba(0, 255, 0, 0.03) 4px
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: ${props => props.isMaximized ? '100vw' : (props.width || 220)}px;
    height: ${props => props.isMaximized ? '100vh' : (props.height || 500)}px;
    font-size: 10px;
  }
`;



const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  padding: 2px 0;
  position: relative;
  z-index: 2;

  .label {
    color: #ffffff;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;

    &::before {
      content: '▶ ';
      color: #ff4444;
      font-size: 8px;
    }
  }

  .value {
    color: #00ff00;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
    animation: ${glow} 3s ease-in-out infinite;
  }

  .unit {
    color: #888888;
    font-size: 9px;
    margin-left: 2px;
  }

  .critical {
    color: #ff4444 !important;
    animation: ${glitch} 0.3s infinite;
  }

  .warning {
    color: #ffaa00 !important;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
  margin: 3px 0 8px 0;
  overflow: hidden;
  position: relative;
  z-index: 2;

  .fill {
    height: 100%;
    background: linear-gradient(90deg,
      #ff0000 0%,
      #ffaa00 25%,
      #00ff00 50%,
      #00aaff 75%,
      #aa00ff 100%
    );
    transition: width 0.5s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.3) 50%,
        transparent 100%
      );
      animation: ${scanline} 1s linear infinite;
    }
  }
`;

const SystemInfo = styled.div`
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid #00ff00;
  font-size: 9px;
  position: relative;
  z-index: 2;

  .info-line {
    margin: 3px 0;
    color: #aaaaaa;
    display: flex;
    justify-content: space-between;

    &::before {
      content: '$ ';
      color: #00ff00;
    }
  }

  .status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00ff00;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    animation: ${glow} 1s ease-in-out infinite;
  }
`;

const StatsHeader = styled.div`
  background: #333;
  padding: 5px 10px;
  border-bottom: 1px solid #00ff00;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 -15px 15px -15px;

  .title {
    color: #00ff00;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
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

  .skull {
    animation: ${glitch} 2s infinite;
  }

  .status-led {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00ff00;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    animation: ${glow} 0.8s ease-in-out infinite;
  }
`;

const StatsContent = styled.div`
  padding: ${props => props.isMinimized ? '0' : '20px 15px'};
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
    background: #00ff00;
    border-radius: 4px;
  }
`;



export default function GeekStats({ gameMode }) {
  const { size, isResizing, startResize: originalStartResize } = useResize(280, 600, 250, 400, 600, 800);
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ top: window.innerHeight - 620, left: 20 });

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
        const newHeight = Math.max(400, startSize.height - deltaY);
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

  const [stats, setStats] = useState({
    fps: 60,
    memory: 0,
    uptime: 0,
    interactions: 0,
    hackLevel: 0,
    cpuUsage: 0,
    networkLatency: 0,
    linesOfCode: 0,
    exploitsFound: 0,
    systemBreaches: 0,
    dataPackets: 0
  });

  const [systemInfo, setSystemInfo] = useState({
    browser: '',
    os: '',
    screen: '',
    connection: '',
    kernel: '',
    shell: ''
  });

  const [threatLevel, setThreatLevel] = useState('LOW');

  useEffect(() => {
    if (!gameMode) return;

    // Get system information
    const getBrowserInfo = () => {
      const ua = navigator.userAgent;
      if (ua.includes('Chrome')) return 'Chrome';
      if (ua.includes('Firefox')) return 'Firefox';
      if (ua.includes('Safari')) return 'Safari';
      if (ua.includes('Edge')) return 'Edge';
      return 'Unknown';
    };

    const getOSInfo = () => {
      const ua = navigator.userAgent;
      if (ua.includes('Mac')) return 'macOS';
      if (ua.includes('Win')) return 'Windows';
      if (ua.includes('Linux')) return 'Linux';
      if (ua.includes('Android')) return 'Android';
      if (ua.includes('iOS')) return 'iOS';
      return 'Unknown';
    };

    setSystemInfo({
      browser: getBrowserInfo(),
      os: getOSInfo(),
      screen: `${window.screen.width}x${window.screen.height}`,
      connection: navigator.connection ? `${navigator.connection.effectiveType}` : '4g',
      kernel: 'v5.4.0-hacker',
      shell: '/bin/zsh'
    });

    let startTime = Date.now();
    let frameCount = 0;
    let lastTime = performance.now();

    const updateStats = () => {
      const now = performance.now();
      frameCount++;

      // Calculate FPS
      if (now - lastTime >= 1000) {
        const fps = Math.round(frameCount * 1000 / (now - lastTime));
        frameCount = 0;
        lastTime = now;

        // Simulate various hacker stats
        const uptime = Math.floor((Date.now() - startTime) / 1000);
        const memory = (performance.memory ? performance.memory.usedJSHeapSize / 1048576 : Math.random() * 50).toFixed(1);
        const cpuUsage = Math.floor(Math.random() * 30) + 10;
        const networkLatency = Math.floor(Math.random() * 50) + 20;
        const linesOfCode = Math.floor(uptime * 2.3) + 1337; // Starting with leet
        const hackLevel = Math.min(100, Math.floor(uptime / 8) + Math.floor(stats.interactions / 3));
        const exploitsFound = Math.floor(uptime / 15) + Math.floor(stats.interactions / 10);
        const systemBreaches = Math.floor(uptime / 30);
        const dataPackets = Math.floor(uptime * 1.7) + stats.interactions * 3;

        // Dynamic threat level based on activity
        let currentThreatLevel = 'LOW';
        if (hackLevel > 70 || exploitsFound > 10) currentThreatLevel = 'HIGH';
        else if (hackLevel > 40 || exploitsFound > 5) currentThreatLevel = 'MED';
        setThreatLevel(currentThreatLevel);

        setStats(prev => ({
          fps,
          memory: parseFloat(memory),
          uptime,
          interactions: prev.interactions,
          hackLevel,
          cpuUsage,
          networkLatency,
          linesOfCode,
          exploitsFound,
          systemBreaches,
          dataPackets
        }));
      }

      requestAnimationFrame(updateStats);
    };

    updateStats();

    // Track interactions
    const handleInteraction = () => {
      setStats(prev => ({
        ...prev,
        interactions: prev.interactions + 1
      }));
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [gameMode, stats.interactions]);

  if (!gameMode || !isVisible) return null;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getValueClass = (value, type) => {
    if (type === 'cpu' && value > 80) return 'critical';
    if (type === 'cpu' && value > 60) return 'warning';
    if (type === 'hackLevel' && value > 80) return 'critical';
    if (type === 'hackLevel' && value > 50) return 'warning';
    return '';
  };

  const getThreatColor = () => {
    switch (threatLevel) {
      case 'HIGH': return '#ff4444';
      case 'MED': return '#ffaa00';
      default: return '#00ff00';
    }
  };

  return (
    <StatsContainer
      isMaximized={isMaximized}
      width={size.width}
      height={isMinimized ? 40 : size.height}
      top={position.top}
      left={position.left}
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
      <StatsHeader>
        <div className="title">
          <span className="skull">💀</span>
          CPU
          <div className="status-led" />
        </div>
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
      </StatsHeader>

      {!isMinimized && (
        <StatsContent isMinimized={isMinimized}>

      <StatRow>
        <span className="label">Render FPS:</span>
        <span className={`value ${stats.fps < 30 ? 'critical' : ''}`}>{stats.fps}</span>
      </StatRow>

      <StatRow>
        <span className="label">Memory Use:</span>
        <span className="value">{stats.memory}<span className="unit">MB</span></span>
      </StatRow>

      <StatRow>
        <span className="label">Session Time:</span>
        <span className="value">{formatTime(stats.uptime)}</span>
      </StatRow>

      <StatRow>
        <span className="label">Commands:</span>
        <span className="value">{stats.interactions}</span>
      </StatRow>

      <StatRow>
        <span className="label">CPU Load:</span>
        <span className={`value ${getValueClass(stats.cpuUsage, 'cpu')}`}>
          {stats.cpuUsage}<span className="unit">%</span>
        </span>
      </StatRow>
      <ProgressBar>
        <div className="fill" style={{ width: `${stats.cpuUsage}%` }} />
      </ProgressBar>

      <StatRow>
        <span className="label">Hack Level:</span>
        <span className={`value ${getValueClass(stats.hackLevel, 'hackLevel')}`}>
          {stats.hackLevel}<span className="unit">%</span>
        </span>
      </StatRow>
      <ProgressBar>
        <div className="fill" style={{ width: `${stats.hackLevel}%` }} />
      </ProgressBar>

      <StatRow>
        <span className="label">Ping:</span>
        <span className="value">{stats.networkLatency}<span className="unit">ms</span></span>
      </StatRow>

      <StatRow>
        <span className="label">Code Read:</span>
        <span className="value">{stats.linesOfCode.toLocaleString()}</span>
      </StatRow>

      <StatRow>
        <span className="label">Exploits:</span>
        <span className="value">{stats.exploitsFound}</span>
      </StatRow>

      <StatRow>
        <span className="label">Breaches:</span>
        <span className="value">{stats.systemBreaches}</span>
      </StatRow>

      <StatRow>
        <span className="label">Data Packets:</span>
        <span className="value">{stats.dataPackets.toLocaleString()}</span>
      </StatRow>

      <SystemInfo>
        <div className="info-line">
          os: {systemInfo.os}
          <div className="status-indicator" />
        </div>
        <div className="info-line">browser: {systemInfo.browser}</div>
        <div className="info-line">resolution: {systemInfo.screen}</div>
        <div className="info-line">network: {systemInfo.connection}</div>
        <div className="info-line">kernel: {systemInfo.kernel}</div>
        <div className="info-line">shell: {systemInfo.shell}</div>
        <div className="info-line" style={{ color: getThreatColor(), fontWeight: 'bold' }}>
          threat_level: {threatLevel}
        </div>
      </SystemInfo>
        </StatsContent>
      )}
    </StatsContainer>
  );
}
