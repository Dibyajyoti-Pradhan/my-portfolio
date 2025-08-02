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
  padding: 32px 24px 32px 24px;
  position: fixed;
  height: 100vh;
  left: 0;
  background: ${({ theme }) => theme.colors.headerBackground};
  box-shadow: 8px 0 40px 0 ${({ theme }) => theme.colors.primary}22;
  ${
    "" /* border-top-right-radius: 48px;
  border-bottom-right-radius: 48px; */
  }
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
    ${
      "" /* height: 100%;
    border-top-right-radius: 48px;
    border-bottom-right-radius: 48px; */
    }
    pointer-events: none;
    box-shadow: 0 0 80px 0 ${({ theme }) => theme.colors.primary}33 inset;
    opacity: 0.7;
    z-index: 1;
    ${"" /* border: 2.5px solid ${({ theme }) => theme.colors.primary}; */}
    border-left: none;
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
  z-index: 1000;
  background: none;
  pointer-events: auto;
  @media (max-width: 768px) {
    display: none;
  }
  .divider-handle {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 30%;
    ${
      "" /* min-height: 60px;
    max-height: 100px; */
    }
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
                <Divider width={panelWidth} onMouseDown={handleMouseDown}>
                  <div className="divider-handle" />
                </Divider>
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
