// src/SimpleGameApp.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import styled from "styled-components";
import ThemeToggle from "./components/common/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import { motion } from "framer-motion";
import FloatingElements from "./components/FloatingElements";
import InteractiveParticles from "./components/InteractiveParticles";
import SoundEffects from "./components/SoundEffects";
import CursorEffects from "./components/CursorEffects";
import ControlledGeekTerminal from "./components/ControlledGeekTerminal";
import ControlledProgressBar from "./components/ControlledProgressBar";
import ControlledGeekStats from "./components/ControlledGeekStats";
import KonamiCode from "./components/KonamiCode";
import SubtleEffects from "./components/SubtleEffects";
import Dock from "./components/Dock";
import HackerNotepad from "./components/HackerNotepad";

const AppContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 100vh;
`;

const LeftColumn = styled.div`
  width: ${(props) => props.width}%;
  padding: 32px 24px 32px 24px;
  position: fixed;
  height: 100vh;
  left: 0;
  background: ${({ theme }) => theme.colors.headerBackground}; /* Solid background, no opacity */
  box-shadow: 8px 0 40px 0 ${({ theme }) => theme.colors.primary}22;
  overflow: visible;
  transition: background 0.5s, box-shadow 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
    box-shadow: 0 0 80px 0 ${({ theme }) => theme.colors.primary}33 inset;
    opacity: 0.7;
    z-index: 1;
    border-right: 2.5px solid ${({ theme }) => theme.colors.primary};
  }
`;

const Divider = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => props.width}%;
  width: 18px;
  height: 100vh;
  transform: translateX(-9px);
  cursor: ew-resize;
  z-index: 500;
  background: none;
  pointer-events: auto;
  @media (max-width: 768px) {
    display: none;
  }
  .divider-handle {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 30%;
    background: ${({ theme }) => theme.colors.primary}cc;
    border-radius: 3px;
    transition: background 0.2s;
    pointer-events: none;
  }
  &:hover .divider-handle {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const ContentScale = styled.div`
  transform-origin: left top;
  /* At min width, font size is 0.95, at max width it's 1.0 */
  transform: ${(props) =>
    `scale(${0.95 + 0.05 * ((props.width - 17.5) / (22.5 - 17.5))})`};
  width: 100%;
`;

const RightColumn = styled.div`
  margin-left: ${(props) => props.width}%;
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px;
  }
`;

const FloatingToggle = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 300;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const GameModeButton = styled(motion.button)`
  background: ${({ gameMode }) =>
    gameMode
      ? 'linear-gradient(135deg, #1a0000, #330000)'
      : 'linear-gradient(135deg, #333, #555)'
  };
  color: ${({ gameMode }) => gameMode ? '#ff0000' : '#fff'};
  border: 2px solid ${({ gameMode }) => gameMode ? '#ff0000' : '#4facfe'};
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: ${({ gameMode }) =>
    gameMode
      ? '0 0 15px rgba(255, 0, 0, 0.5), inset 0 0 15px rgba(255, 0, 0, 0.1)'
      : '0 4px 15px rgba(79, 172, 254, 0.3)'
  };
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    box-shadow: ${({ gameMode }) =>
      gameMode
        ? '0 0 25px rgba(255, 0, 0, 0.8), inset 0 0 25px rgba(255, 0, 0, 0.2)'
        : '0 6px 20px rgba(79, 172, 254, 0.4)'
    };
    transform: translateY(-2px) ${({ gameMode }) => gameMode ? 'scale(1.02)' : 'scale(1.05)'};
    text-shadow: ${({ gameMode }) =>
      gameMode
        ? '0 0 10px #ff0000'
        : 'none'
    };
  }

  &:active {
    transform: translateY(0);
  }
`;

const GameOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent; /* Remove the color overlay to preserve original colors */
  pointer-events: none;
  z-index: 1;


`;

const DevModePanel = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 450px;
  height: 60vh;
  background: linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  border: 3px solid #00ff41;
  border-radius: 8px;
  box-shadow:
    0 0 40px rgba(0, 255, 65, 0.3),
    inset 0 0 100px rgba(0, 255, 65, 0.05);
  z-index: 9999;
  padding: 0;
  overflow-y: auto;
  font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
  color: #00ff41;

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
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #000;
    border-left: 1px solid #333;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #00ff41, #00cc33);
    border-radius: 0;
    border: 1px solid #00ff41;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #00cc33, #009900);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9998;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #000;
  border: 1px solid #ff4444;
  color: #ff4444;
  width: 35px;
  height: 25px;
  border-radius: 0;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  text-shadow: 0 0 5px #ff4444;
  box-shadow:
    0 0 10px rgba(255, 68, 68, 0.3),
    inset 0 0 10px rgba(255, 68, 68, 0.1);

  &:hover {
    background: #ff4444;
    color: #000;
    box-shadow:
      0 0 20px #ff4444,
      inset 0 0 20px rgba(0, 0, 0, 0.3);
    text-shadow: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;

function SimpleGameApp() {
  const [isMobile, setIsMobile] = useState(false);
  const [panelWidth, setPanelWidth] = useState(20);
  const [gameMode, setGameMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showExit, setShowExit] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Refs for controlled components
  const terminalRef = React.useRef();
  const activityRef = React.useRef();
  const cpuRef = React.useRef();

  // State to track visibility for dock indicators
  const [componentVisibility, setComponentVisibility] = useState({
    terminal: false,
    activity: false,
    cpu: false,
    notepad: false
  });

  // Notepad state
  const [notepadVisible, setNotepadVisible] = useState(false);
  const [notepadMinimized, setNotepadMinimized] = useState(false);

  // Dock handler functions
  const handleTerminalClick = () => {
    if (terminalRef.current) {
      terminalRef.current.toggle();
      setComponentVisibility(prev => ({
        ...prev,
        terminal: !prev.terminal
      }));
    }
  };

  const handleActivityClick = () => {
    if (activityRef.current) {
      activityRef.current.toggle();
      setComponentVisibility(prev => ({
        ...prev,
        activity: !prev.activity
      }));
    }
  };

  const handleCpuClick = () => {
    if (cpuRef.current) {
      cpuRef.current.toggle();
      setComponentVisibility(prev => ({
        ...prev,
        cpu: !prev.cpu
      }));
    }
  };

  const handleNotepadClick = () => {
    setNotepadVisible(true);
    setNotepadMinimized(false);
    setComponentVisibility(prev => ({
      ...prev,
      notepad: true
    }));
  };

  const handleNotepadClose = () => {
    setNotepadVisible(false);
    setComponentVisibility(prev => ({
      ...prev,
      notepad: false
    }));
  };

  const handleNotepadMinimize = () => {
    setNotepadMinimized(!notepadMinimized);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Auto-open terminal when entering dev mode
  useEffect(() => {
    if (gameMode) {
      // Add a small delay for auto-opening when entering dev mode
      setTimeout(() => {
        handleTerminalClick();
        // Auto-maximize the terminal after opening
        setTimeout(() => {
          if (terminalRef.current && terminalRef.current.maximize) {
            terminalRef.current.maximize();
          }
        }, 100);
      }, 2000);
    }
  }, [gameMode]);

  // Typing animation function
  const typeCommand = (command, callback) => {
    setIsTyping(true);
    setTerminalText('');

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < command.length) {
        setTerminalText(command.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsTyping(false);
          if (callback) callback();
        }, 500);
      }
    }, 50);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();

    const handleMouseMove = (e) => {
      const newPct = Math.round((e.clientX / window.innerWidth) * 100);
      const clamped = Math.max(17.5, Math.min(22.5, newPct));
      setPanelWidth(clamped);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleGameModeToggle = () => {
    if (window.playSoundEffect) {
      window.playSoundEffect.click();
    }

    if (!gameMode) {
      setShowWelcome(true);
    } else {
      setShowExit(true);
    }
  };

  const startGame = () => {
    if (window.playSoundEffect) {
      window.playSoundEffect.success();
    }
    typeCommand('sudo activate --force', () => {
      setGameMode(true);
      setShowWelcome(false);
      setTerminalText('');
    });
  };

  const abortMode = () => {
    typeCommand('sudo abort', () => {
      setShowWelcome(false);
      setTerminalText('');
    });
  };

  const exitDevMode = () => {
    typeCommand('sudo shutdown --dev-mode', () => {
      setGameMode(false);
      setShowExit(false);
      setTerminalText('');
    });
  };

  const stayInDevMode = () => {
    typeCommand('sudo cancel --stay-active', () => {
      setShowExit(false);
      setTerminalText('');
    });
  };

  return (
    <ThemeProvider gameMode={gameMode}>
      {(themeStyles) => (
        <StyledThemeProvider theme={themeStyles}>
          <Router>
            <GlobalStyle />

            {gameMode && (
              <GameOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            )}

            {/* Effects available in both modes */}
            <FloatingElements gameMode={gameMode} />
            <SoundEffects gameMode={gameMode} />
            <KonamiCode gameMode={gameMode} />

            {/* Beautiful chemical bond effects for both modes */}
            <SubtleEffects gameMode={gameMode} />

            {/* Game mode exclusive effects */}
            {gameMode && (
              <>
                <InteractiveParticles gameMode={gameMode} />
                <CursorEffects gameMode={gameMode} />

                {/* Controlled components */}
                <ControlledProgressBar ref={activityRef} gameMode={gameMode} />
                <ControlledGeekStats ref={cpuRef} gameMode={gameMode} />
                <ControlledGeekTerminal
                  ref={terminalRef}
                  gameMode={gameMode}
                  onActivityClick={handleActivityClick}
                  onCpuClick={handleCpuClick}
                  onNotepadClick={handleNotepadClick}
                />

                {/* Hacker Notepad */}
                <HackerNotepad
                  isVisible={notepadVisible}
                  onClose={handleNotepadClose}
                  onMinimize={handleNotepadMinimize}
                  isMinimized={notepadMinimized}
                />

                {/* Dock */}
                <Dock
                  onTerminalClick={handleTerminalClick}
                  onActivityClick={handleActivityClick}
                  onCpuClick={handleCpuClick}
                  onNotepadClick={handleNotepadClick}
                  terminalVisible={componentVisibility.terminal}
                  activityVisible={componentVisibility.activity}
                  cpuVisible={componentVisibility.cpu}
                  notepadVisible={componentVisibility.notepad}
                />
              </>
            )}

            <FloatingToggle>
              <ThemeToggle />
              <GameModeButton
                gameMode={gameMode}
                onClick={handleGameModeToggle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ position: 'static', bottom: 'auto', left: 'auto', marginLeft: '10px' }}
              >
                {gameMode ? '💀 DEV MODE' : '💻 PRESENTATION'}
              </GameModeButton>
            </FloatingToggle>



            {showWelcome && (
              <>
                <Overlay
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setShowWelcome(false)}
                />
                <DevModePanel
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                                    <CloseButton onClick={() => setShowWelcome(false)}>
                    ×
                  </CloseButton>

                  {/* Terminal Header */}
                  <div style={{
                    background: '#111',
                    padding: '15px 20px',
                    borderBottom: '2px solid #00ff41',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <div style={{
                      color: '#00ff41',
                      fontSize: '14px',
                      fontFamily: 'Courier New, monospace',
                      marginBottom: '8px',
                      textShadow: '0 0 10px #00ff41'
                    }}>
                      root@hackermachine:~$
                    </div>
                    <div style={{
                      color: '#ff4444',
                      fontSize: '12px',
                      fontFamily: 'Courier New, monospace',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      textShadow: '0 0 8px #ff4444',
                      marginBottom: '5px'
                    }}>
                      [!] SECURITY BREACH DETECTED
                    </div>
                    <div style={{
                      color: '#ffaa00',
                      fontSize: '14px',
                      fontFamily: 'Courier New, monospace',
                      fontWeight: 'bold',
                      textShadow: '0 0 8px #ffaa00'
                    }}>
                      ENABLING DEV_MODE...
                    </div>
                                    </div>

                  {/* Terminal Command Line */}
                  <div style={{
                    background: '#000',
                    border: '1px solid #333',
                    margin: '0 20px 20px 20px',
                    padding: '10px 15px',
                    fontFamily: 'Courier New, monospace',
                    fontSize: '14px',
                    minHeight: '40px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#00ff41', marginRight: '8px' }}>
                        root@hackermachine:~$
                      </span>
                      <span style={{ color: '#ffaa00' }}>
                        {terminalText}
                      </span>
                      <span style={{
                        color: '#00ff41',
                        opacity: showCursor && !isTyping ? 1 : 0,
                        marginLeft: '2px',
                        animation: isTyping ? 'none' : 'blink 1s infinite'
                      }}>
                        █
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div style={{ padding: '0 20px', position: 'relative', zIndex: 2 }}>
                    <div style={{
                      color: '#00ff41',
                      fontSize: '16px',
                      fontFamily: 'Courier New, monospace',
                      marginBottom: '15px',
                      textShadow: '0 0 10px #00ff41',
                      borderLeft: '3px solid #00ff41',
                      paddingLeft: '15px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      &gt; SYSTEM_UPDATES_v2.1.0
                    </div>
                                                                                <div style={{
                      background: '#0a0a0a',
                      border: '1px solid #333',
                      padding: '15px',
                      marginBottom: '20px',
                      fontFamily: 'Courier New, monospace',
                      fontSize: '13px',
                      lineHeight: '1.8'
                    }}>
                      <div style={{ color: '#666', marginBottom: '10px' }}>
                        ┌─ EXECUTION LOG ─────────────────────┐
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#ffaa00' }}>█</span>
                        <span style={{ color: '#888', marginRight: '8px' }}>[INIT]</span>
                        <span style={{ color: '#00ff41' }}>Draggable terminal + real-time stats</span>
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#ffaa00' }}>█</span>
                        <span style={{ color: '#888', marginRight: '8px' }}>[LOAD]</span>
                        <span style={{ color: '#00ff41' }}>Interactive molecular particle network</span>
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#ffaa00' }}>█</span>
                        <span style={{ color: '#888', marginRight: '8px' }}>[EXEC]</span>
                        <span style={{ color: '#00ff41' }}>Side panel animation system</span>
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#ffaa00' }}>█</span>
                        <span style={{ color: '#888', marginRight: '8px' }}>[RUN]</span>
                        <span style={{ color: '#00ff41' }}>Functional terminal with custom commands</span>
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#ffaa00' }}>█</span>
                        <span style={{ color: '#888', marginRight: '8px' }}>[FX]</span>
                        <span style={{ color: '#00ff41' }}>Enhanced sparkle effects + cursor trails</span>
                      </div>
                      <div style={{ marginBottom: '10px' }}>
                        <span style={{ color: '#ffaa00' }}>█</span>
                        <span style={{ color: '#888', marginRight: '8px' }}>[EASTEREGG]</span>
                        <span style={{ color: '#00ff41' }}>Konami code easter egg support</span>
                      </div>
                      <div style={{ color: '#666' }}>
                        └─────────────────────────────────────┘
                      </div>
                    </div>
                                    </div>

                                    {/* Bottom terminal buttons */}
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: '#111',
                    border: '1px solid #333',
                    padding: '15px',
                    zIndex: 2
                  }}>
                    <div style={{
                      color: '#666',
                      fontSize: '11px',
                      fontFamily: 'Courier New, monospace',
                      marginBottom: '10px',
                      textAlign: 'center'
                    }}>
                      ┌─ AUTHORIZATION REQUIRED ─┐
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={startGame}
                        style={{
                          background: 'linear-gradient(180deg, #003300, #001a00)',
                          border: '1px solid #00ff41',
                          color: '#00ff41',
                          padding: '10px 20px',
                          fontFamily: 'Courier New, monospace',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          borderRadius: '0',
                          textTransform: 'uppercase',
                          boxShadow:
                            'inset 0 1px 0 rgba(0, 255, 65, 0.2), ' +
                            '0 0 10px rgba(0, 255, 65, 0.3)',
                          transition: 'all 0.2s ease',
                          flex: '1',
                          textShadow: '0 0 5px #00ff41'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'linear-gradient(180deg, #00ff41, #00cc33)';
                          e.target.style.color = '#000';
                          e.target.style.boxShadow = '0 0 20px #00ff41';
                          e.target.style.textShadow = 'none';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'linear-gradient(180deg, #003300, #001a00)';
                          e.target.style.color = '#00ff41';
                          e.target.style.boxShadow =
                            'inset 0 1px 0 rgba(0, 255, 65, 0.2), ' +
                            '0 0 10px rgba(0, 255, 65, 0.3)';
                          e.target.style.textShadow = '0 0 5px #00ff41';
                        }}
                      >
                        &gt; EXECUTE
                      </button>
                                            <button
                        onClick={abortMode}
                        style={{
                          background: 'linear-gradient(180deg, #330000, #1a0000)',
                          border: '1px solid #ff4444',
                          color: '#ff4444',
                          padding: '10px 20px',
                          fontFamily: 'Courier New, monospace',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          borderRadius: '0',
                          textTransform: 'uppercase',
                          boxShadow:
                            'inset 0 1px 0 rgba(255, 68, 68, 0.2), ' +
                            '0 0 10px rgba(255, 68, 68, 0.3)',
                          transition: 'all 0.2s ease',
                          flex: '1',
                          textShadow: '0 0 5px #ff4444'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'linear-gradient(180deg, #ff4444, #cc3333)';
                          e.target.style.color = '#000';
                          e.target.style.boxShadow = '0 0 20px #ff4444';
                          e.target.style.textShadow = 'none';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'linear-gradient(180deg, #330000, #1a0000)';
                          e.target.style.color = '#ff4444';
                          e.target.style.boxShadow =
                            'inset 0 1px 0 rgba(255, 68, 68, 0.2), ' +
                            '0 0 10px rgba(255, 68, 68, 0.3)';
                          e.target.style.textShadow = '0 0 5px #ff4444';
                        }}
                      >
                        &gt; ABORT
                      </button>
                    </div>
                  </div>
                </DevModePanel>
              </>
            )}

            {showExit && (
              <>
                <Overlay
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setShowExit(false)}
                />
                <DevModePanel
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <CloseButton onClick={() => setShowExit(false)}>
                    ×
                  </CloseButton>

                  {/* Terminal Header */}
                  <div style={{
                    background: '#111',
                    padding: '15px 20px',
                    borderBottom: '2px solid #ff4444',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <div style={{
                      color: '#00ff41',
                      fontSize: '14px',
                      fontFamily: 'Courier New, monospace',
                      marginBottom: '8px',
                      textShadow: '0 0 10px #00ff41'
                    }}>
                      root@hackermachine:~$
                    </div>
                    <div style={{
                      color: '#ff4444',
                      fontSize: '12px',
                      fontFamily: 'Courier New, monospace',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      textShadow: '0 0 8px #ff4444',
                      marginBottom: '5px'
                    }}>
                      [!] DEV MODE SHUTDOWN REQUEST
                    </div>
                    <div style={{
                      color: '#ffaa00',
                      fontSize: '14px',
                      fontFamily: 'Courier New, monospace',
                      fontWeight: 'bold',
                      textShadow: '0 0 8px #ffaa00'
                    }}>
                      CONFIRMING EXIT...
                    </div>
                  </div>

                  {/* Terminal Command Line */}
                  <div style={{
                    background: '#000',
                    border: '1px solid #333',
                    margin: '0 20px 20px 20px',
                    padding: '10px 15px',
                    fontFamily: 'Courier New, monospace',
                    fontSize: '14px',
                    minHeight: '40px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#00ff41', marginRight: '8px' }}>
                        root@hackermachine:~$
                      </span>
                      <span style={{ color: '#ffaa00' }}>
                        {terminalText}
                      </span>
                      <span style={{
                        color: '#00ff41',
                        opacity: showCursor && !isTyping ? 1 : 0,
                        marginLeft: '2px',
                        animation: isTyping ? 'none' : 'blink 1s infinite'
                      }}>
                        █
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div style={{ padding: '0 20px', position: 'relative', zIndex: 2 }}>
                    <div style={{
                      color: '#ff4444',
                      fontSize: '16px',
                      fontFamily: 'Courier New, monospace',
                      marginBottom: '15px',
                      textShadow: '0 0 10px #ff4444',
                      borderLeft: '3px solid #ff4444',
                      paddingLeft: '15px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      &gt; SHUTDOWN_CONFIRMATION
                    </div>
                    <div style={{
                      background: '#0a0a0a',
                      border: '1px solid #333',
                      padding: '15px',
                      marginBottom: '20px',
                      fontFamily: 'Courier New, monospace',
                      fontSize: '13px',
                      lineHeight: '1.8'
                    }}>
                      <div style={{ color: '#666', marginBottom: '10px' }}>
                        ┌─ ACTIVE PROCESSES ──────────────────┐
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#ff4444' }}>●</span>
                        <span style={{ color: '#888', marginRight: '8px' }}>[TERM]</span>
                        <span style={{ color: '#00ff41' }}>Draggable terminal interface</span>
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#ff4444' }}>●</span>
                        <span style={{ color: '#888', marginRight: '8px' }}>[MOLC]</span>
                        <span style={{ color: '#00ff41' }}>Molecular particle network</span>
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#ff4444' }}>●</span>
                        <span style={{ color: '#888', marginRight: '8px' }}>[EFCT]</span>
                        <span style={{ color: '#00ff41' }}>Enhanced visual effects</span>
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#ff4444' }}>●</span>
                        <span style={{ color: '#888', marginRight: '8px' }}>[STATS]</span>
                        <span style={{ color: '#00ff41' }}>Real-time system monitoring</span>
                      </div>
                      <div style={{ marginBottom: '10px' }}>
                        <span style={{ color: '#ff4444' }}>●</span>
                        <span style={{ color: '#888', marginRight: '8px' }}>[KCODE]</span>
                        <span style={{ color: '#00ff41' }}>Konami code listener</span>
                      </div>
                      <div style={{ color: '#666' }}>
                        └──────────────────────────────────────┘
                      </div>
                    </div>
                  </div>

                  {/* Bottom terminal buttons */}
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: '#111',
                    border: '1px solid #333',
                    padding: '15px',
                    zIndex: 2
                  }}>
                    <div style={{
                      color: '#666',
                      fontSize: '11px',
                      fontFamily: 'Courier New, monospace',
                      marginBottom: '10px',
                      textAlign: 'center'
                    }}>
                      ┌─ SHUTDOWN CONFIRMATION ─┐
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={exitDevMode}
                        style={{
                          background: 'linear-gradient(180deg, #330000, #1a0000)',
                          border: '1px solid #ff4444',
                          color: '#ff4444',
                          padding: '10px 20px',
                          fontFamily: 'Courier New, monospace',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          borderRadius: '0',
                          textTransform: 'uppercase',
                          boxShadow:
                            'inset 0 1px 0 rgba(255, 68, 68, 0.2), ' +
                            '0 0 10px rgba(255, 68, 68, 0.3)',
                          transition: 'all 0.2s ease',
                          flex: '1',
                          textShadow: '0 0 5px #ff4444'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'linear-gradient(180deg, #ff4444, #cc3333)';
                          e.target.style.color = '#000';
                          e.target.style.boxShadow = '0 0 20px #ff4444';
                          e.target.style.textShadow = 'none';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'linear-gradient(180deg, #330000, #1a0000)';
                          e.target.style.color = '#ff4444';
                          e.target.style.boxShadow =
                            'inset 0 1px 0 rgba(255, 68, 68, 0.2), ' +
                            '0 0 10px rgba(255, 68, 68, 0.3)';
                          e.target.style.textShadow = '0 0 5px #ff4444';
                        }}
                      >
                        &gt; SHUTDOWN
                      </button>
                      <button
                        onClick={stayInDevMode}
                        style={{
                          background: 'linear-gradient(180deg, #003300, #001a00)',
                          border: '1px solid #00ff41',
                          color: '#00ff41',
                          padding: '10px 20px',
                          fontFamily: 'Courier New, monospace',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          borderRadius: '0',
                          textTransform: 'uppercase',
                          boxShadow:
                            'inset 0 1px 0 rgba(0, 255, 65, 0.2), ' +
                            '0 0 10px rgba(0, 255, 65, 0.3)',
                          transition: 'all 0.2s ease',
                          flex: '1',
                          textShadow: '0 0 5px #00ff41'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'linear-gradient(180deg, #00ff41, #00cc33)';
                          e.target.style.color = '#000';
                          e.target.style.boxShadow = '0 0 20px #00ff41';
                          e.target.style.textShadow = 'none';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'linear-gradient(180deg, #003300, #001a00)';
                          e.target.style.color = '#00ff41';
                          e.target.style.boxShadow =
                            'inset 0 1px 0 rgba(0, 255, 65, 0.2), ' +
                            '0 0 10px rgba(0, 255, 65, 0.3)';
                          e.target.style.textShadow = '0 0 5px #00ff41';
                        }}
                      >
                        &gt; CANCEL
                      </button>
                    </div>
                  </div>
                </DevModePanel>
              </>
            )}

            <AppContainer>
              {!isMobile && (
                <LeftColumn
                  width={panelWidth}
                  data-panel="left"
                  as={motion.div}
                  initial={{ x: 0 }}
                  animate={{
                    x: gameMode ? `-${panelWidth + 5}%` : 0,
                    opacity: gameMode ? 0 : 1
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <ContentScale width={panelWidth}>
                      <Header />
                    </ContentScale>
                  </div>
                  <Footer />
                </LeftColumn>
              )}
              {!isMobile && (
                <Divider
                  width={panelWidth}
                  onMouseDown={handleMouseDown}
                  as={motion.div}
                  initial={{ x: 0 }}
                  animate={{
                    x: gameMode ? `-${panelWidth + 5}%` : 0,
                    opacity: gameMode ? 0 : 1
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="divider-handle" />
                </Divider>
              )}

              <RightColumn
                width={isMobile ? 0 : (gameMode ? 0 : panelWidth)}
                style={{
                  marginLeft: gameMode ? 0 : `${panelWidth}%`
                }}
              >
                <Home />
              </RightColumn>
            </AppContainer>
          </Router>
        </StyledThemeProvider>
      )}
    </ThemeProvider>
  );
}

export default SimpleGameApp;
