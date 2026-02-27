import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CurtainLoader from "./components/CurtainLoader";
import styled, { keyframes } from "styled-components";
import ThemeToggle from "./components/common/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const AppContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 100vh;
  animation: ${fadeIn} 0.25s ease forwards;
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

const FloatingToggle = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1100;
  display: none;

  @media (max-width: 900px) {
    display: block;
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

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [panelWidth, setPanelWidth] = useState(22);
  const [showCurtain, setShowCurtain] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isDragging = React.useRef(false);

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

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const newPct = (e.clientX / window.innerWidth) * 100;
    const clamped = Math.max(18, Math.min(28, newPct));
    setPanelWidth(Math.round(clamped * 10) / 10);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  };

  const handleMouseDown = () => {
    isDragging.current = true;
    document.body.style.cursor = "ew-resize";
    document.body.style.userSelect = "none";
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <ThemeProvider>
      {(themeStyles) => (
        <StyledThemeProvider theme={themeStyles}>
          <Router>
            <GlobalStyle />
            <ScrollProgressBar progress={scrollProgress} />
            <FloatingToggle>
              <ThemeToggle />
            </FloatingToggle>
            {showCurtain && (
              <CurtainLoader onFinish={() => setShowCurtain(false)} />
            )}
            <AppContainer>
              {!isMobile && (
                <LeftColumn width={panelWidth}>
                  <Header />
                  <Footer />
                </LeftColumn>
              )}
              {!isMobile && (
                <DividerHandle width={panelWidth} onMouseDown={handleMouseDown}>
                  <div className="handle-bar" />
                </DividerHandle>
              )}
              <RightColumn width={isMobile ? 0 : panelWidth}>
                <Home />
              </RightColumn>
            </AppContainer>
          </Router>
        </StyledThemeProvider>
      )}
    </ThemeProvider>
  );
}

export default App;
