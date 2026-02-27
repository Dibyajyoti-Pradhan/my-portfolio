import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const reveal = keyframes`
  0% {
    clip-path: inset(0 100% 0 0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    clip-path: inset(0 0% 0 0);
    opacity: 1;
  }
`;

const curtainUp = keyframes`
  0%   { transform: translateY(0); border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
  15%  { border-bottom-left-radius: 48px; border-bottom-right-radius: 48px; }
  100% { transform: translateY(-102%); border-bottom-left-radius: 48px; border-bottom-right-radius: 48px; }
`;

const curtainDown = keyframes`
  0%   { transform: translateY(0); border-top-left-radius: 0; border-top-right-radius: 0; }
  15%  { border-top-left-radius: 48px; border-top-right-radius: 48px; }
  100% { transform: translateY(102%); border-top-left-radius: 48px; border-top-right-radius: 48px; }
`;

const BlurBg = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  backdrop-filter: blur(3px);
  transition: opacity 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  opacity: ${({ $unblur }) => ($unblur ? 0 : 1)};
  pointer-events: none;
`;

const CurtainHalf = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  height: 50%;
  z-index: 9999;
  background: ${({ theme }) => theme.colors.background};
  border-left: 1px solid ${({ theme }) => theme.colors.divider};
  border-right: 1px solid ${({ theme }) => theme.colors.divider};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  overflow: hidden;
`;

const TopCurtain = styled(CurtainHalf)`
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  align-items: flex-end;
  padding-bottom: 4px;
  animation: ${curtainUp} 1.6s cubic-bezier(0.76, 0, 0.24, 1) 1s forwards;
`;

const BottomCurtain = styled(CurtainHalf)`
  bottom: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  align-items: flex-start;
  padding-top: 4px;
  animation: ${curtainDown} 1.6s cubic-bezier(0.76, 0, 0.24, 1) 1s forwards;
`;

const TopContent = styled.div`
  text-align: center;
  padding-bottom: 20px;

  .monogram {
    font-size: clamp(28px, 5vw, 44px);
    font-weight: 900;
    letter-spacing: -0.06em;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1;
    animation: ${reveal} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const BottomContent = styled.div`
  text-align: center;
  padding-top: 20px;

  .tagline {
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textTertiary};
    letter-spacing: 0.2em;
    text-transform: uppercase;
    animation: ${reveal} 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
  }
`;

const CurtainLoader = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [unblur, setUnblur] = useState(false);

  useEffect(() => {
    const onFinishRef = onFinish;
    const hold = setTimeout(() => {
      setUnblur(true);
      setTimeout(() => {
        setShow(false);
        if (onFinishRef) onFinishRef();
      }, 700);
    }, 2400);
    return () => clearTimeout(hold);
  }, []);

  if (!show) return null;

  return (
    <>
      <BlurBg $unblur={unblur} />
      <TopCurtain>
        <TopContent>
          <div className="monogram">
            DIBYAJYOTI<span>.</span>
          </div>
        </TopContent>
      </TopCurtain>
      <BottomCurtain>
        <BottomContent>
          <div className="tagline">Senior Software Engineer · London</div>
        </BottomContent>
      </BottomCurtain>
    </>
  );
};

export default CurtainLoader;
