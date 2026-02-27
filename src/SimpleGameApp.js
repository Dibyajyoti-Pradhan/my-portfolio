// src/SimpleGameApp.js
import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MobileNav from "./components/MobileNav";
import CurtainLoader from "./components/CurtainLoader";
import styled from "styled-components";
import { ThemeProvider } from "./context/ThemeContext";
import { motion } from "framer-motion";
import InteractiveParticles from "./components/InteractiveParticles";
import CursorEffects from "./components/CursorEffects";
import ControlledGeekTerminal from "./components/ControlledGeekTerminal";
import ControlledProgressBar from "./components/ControlledProgressBar";
import ControlledGeekStats from "./components/ControlledGeekStats";
import Dock from "./components/Dock";
import HackerNotepad from "./components/HackerNotepad";

const AppContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 100vh;
`;

const LeftColumn = styled.div`
  width: ${(props) => props.width}%;
  padding: 0 20px 0 24px;
  position: fixed;
  height: 100vh;
  left: 0;
  background: ${({ theme }) => theme.colors.headerBackground};
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  border-right: 1px solid ${({ theme }) => theme.colors.divider};
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 10;
  transition: background 0.4s ease;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const DividerHandle = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => props.width}%;
  width: 12px;
  height: 100vh;
  cursor: ew-resize;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  .handle-bar {
    width: 2px;
    height: 36px;
    background: ${({ theme }) => theme.colors.primary}70;
    border-radius: 1px;
    transition: all 0.2s;
  }

  &:hover .handle-bar {
    background: ${({ theme }) => theme.colors.primary};
    height: 52px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const RightColumn = styled.div`
  margin-left: ${(props) => props.width}%;
  flex: 1;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  max-width: ${(props) => 100 - props.width}vw;

  @media (max-width: 900px) {
    margin-left: 0;
    max-width: 100vw;
  }
`;

const ScrollProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => props.progress}%;
  height: 1.5px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
  z-index: 2000;
  transition: width 0.08s linear;
  border-radius: 0 1px 1px 0;
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
  const [panelWidth, setPanelWidth] = useState(22);
  const [gameMode, setGameMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showExit, setShowExit] = useState(false);
  const [showCurtain, setShowCurtain] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
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
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for game mode toggle from Footer's Easter egg trigger
  useEffect(() => {
    const handler = () => handleGameModeToggle();
    document.addEventListener("toggleGameMode", handler);
    return () => document.removeEventListener("toggleGameMode", handler);
  }, [gameMode]);

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

  const isDragging = React.useRef(false);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    const newPct = (e.clientX / window.innerWidth) * 100;
    const clamped = Math.max(18, Math.min(28, newPct));
    setPanelWidth(Math.round(clamped * 10) / 10);
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }, [handleMouseMove]);

  const handleMouseDown = () => {
    isDragging.current = true;
    document.body.style.cursor = "ew-resize";
    document.body.style.userSelect = "none";
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
            <ScrollProgressBar progress={scrollProgress} />

            {gameMode && (
              <GameOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            )}

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

            {showCurtain && (
              <CurtainLoader onFinish={() => setShowCurtain(false)} />
            )}
            {isMobile && <MobileNav />}



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
                  <Header />
                  <Footer />
                </LeftColumn>
              )}
              {!isMobile && (
                <DividerHandle
                  width={panelWidth}
                  onMouseDown={handleMouseDown}
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{
                    x: gameMode ? `-${panelWidth + 5}%` : 0,
                    opacity: gameMode ? 0 : 1
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="handle-bar" />
                </DividerHandle>
              )}

              <RightColumn
                width={isMobile ? 0 : (gameMode ? 0 : panelWidth)}
                style={{
                  marginLeft: gameMode ? 0 : `${isMobile ? 0 : panelWidth}%`
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
