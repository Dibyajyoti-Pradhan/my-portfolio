import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CurtainLoader from "./components/CurtainLoader";
import styled from "styled-components";
import { ThemeProvider } from "./context/ThemeContext";

const AppContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 100vh;
`;

const LeftColumn = styled.div`
  width: ${(props) => props.width}%;
  padding: 20px;
  position: fixed;
  height: 100vh;
  left: 0;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  overflow: visible;
  transition: width 0.25s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Divider = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => props.width}%;
  width: 4px;
  height: 100vh;
  transform: translateX(-2px);
  cursor: ew-resize;
  background: ${({ theme }) => theme.colors.primary}33;
  z-index: 1000;
  transition: width 0.2s, background 0.2s;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 47.5%;
    width: 11px;
    height: 5%;
    min-height: 22px;
    min-width: 11px;
    max-width: 16px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    transform: translate(-50%, 0);
    opacity: 0.8;
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.primary}33;
  }
  &:hover::before {
    opacity: 1;
    background: ${({ theme }) => theme.colors.primary}cc;
    box-shadow: 0 0 16px ${({ theme }) => theme.colors.primary}99;
  }
  @media (max-width: 768px) {
    display: none;
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
  transition: margin-left 0.25s ease;
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px;
  }
`;

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [panelWidth, setPanelWidth] = useState(20);
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    const newPct = Math.round((e.clientX / window.innerWidth) * 100);
    const clamped = Math.max(17.5, Math.min(22.5, newPct));
    setPanelWidth(clamped);
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = () => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <ThemeProvider>
      {(themeStyles) => (
        <StyledThemeProvider theme={themeStyles}>
          <Router>
            <GlobalStyle />
            {showCurtain && (
              <CurtainLoader onFinish={() => setShowCurtain(false)} />
            )}
            <AppContainer>
              {!isMobile && (
                <LeftColumn width={panelWidth}>
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
                <Divider width={panelWidth} onMouseDown={handleMouseDown} />
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
