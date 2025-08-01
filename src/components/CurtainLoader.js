import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const curtainOpenTop = keyframes`
  0% {
    transform: translateY(0);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  20% {
    transform: translateY(0);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  30% {
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
  }
  100% {
    transform: translateY(-100%);
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
  }
`;

const curtainOpenBottom = keyframes`
  0% {
    transform: translateY(0);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  20% {
    transform: translateY(0);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  30% {
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
  }
  100% {
    transform: translateY(100%);
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
  }
`;

const BlurBg = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  backdrop-filter: blur(2px);
  transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
  opacity: ${({ unblur }) => (unblur ? 0 : 1)};
`;

const Curtain = styled.div`
  position: fixed;
  left: 0;
  width: 100vw;
  height: 50vh;
  z-index: 9999;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.headerBackground} 100%
  );
  box-shadow: 0 8px 40px 0 ${({ theme }) => theme.colors.primary}33;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const TopCurtain = styled(Curtain)`
  top: 0;
  animation: ${curtainOpenTop} 4s cubic-bezier(0.8, 0, 0.475, 1) forwards;
`;

const BottomCurtain = styled(Curtain)`
  bottom: 0;
  animation: ${curtainOpenBottom} 4s cubic-bezier(0.8, 0, 0.475, 1) forwards;
`;

const CurtainText = styled.div`
  font-size: 2.7rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: "Canopee", serif;
  letter-spacing: 0.12em;
  font-weight: bold;
  text-shadow: 0 2px 16px ${({ theme }) => theme.colors.headerBackground};
  opacity: 0.97;
  text-align: center;
  line-height: 1.2;
`;

const CurtainLoader = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [unblur, setUnblur] = useState(false);

  useEffect(() => {
    const hold = setTimeout(() => {
      setUnblur(true);
      setTimeout(() => {
        setShow(false);
        if (onFinish) onFinish();
      }, 1000);
    }, 2000 + 2000 - 1000); // 2s hold, 2s anim, last 1s is unblur
    return () => clearTimeout(hold);
  }, [onFinish]);

  if (!show) return null;

  return (
    <>
      <BlurBg unblur={unblur} />
      <TopCurtain>
        <CurtainText>
          <span style={{ fontSize: "2.2rem", letterSpacing: "0.18em" }}>
            Dibyajyoti Pradhan
          </span>
        </CurtainText>
      </TopCurtain>
      <BottomCurtain>
        <CurtainText>
          <span style={{ fontSize: "1.3rem", fontWeight: 400, opacity: 0.8 }}>
            Senior Software Engineer
          </span>
          <br />
          <span style={{ fontSize: "1.2rem", fontWeight: 400, opacity: 0.8 }}>
            London
          </span>
        </CurtainText>
      </BottomCurtain>
    </>
  );
};

export default CurtainLoader;
