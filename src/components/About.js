import React, { useState, useContext, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { personalInfo } from "../data/data";
import { ThemeContext } from "../context/ThemeContext";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0);  }
`;

const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0);   }
`;

const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0);  }
`;

const waveHand = keyframes`
  0%   { transform: rotate(0deg); }
  10%  { transform: rotate(16deg); }
  20%  { transform: rotate(-8deg); }
  30%  { transform: rotate(16deg); }
  40%  { transform: rotate(-4deg); }
  50%  { transform: rotate(10deg); }
  60%  { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

const heartBurst = keyframes`
  0%   { opacity: 0.9; transform: scale(0.6) translateY(0); }
  30%  { opacity: 1;   transform: scale(1.15) translateY(-14px); }
  65%  { opacity: 1;   transform: scale(1) translateY(-70px); }
  100% { opacity: 0;   transform: scale(0.8) translateY(-130px); }
`;

const makeRingPulse = (color) => keyframes`
  0%, 100% { box-shadow: 0 0 0 0 ${color}00; }
  50%       { box-shadow: 0 0 0 8px ${color}1f; }
`;

const scrollBounce = keyframes`
  0%, 100% { transform: translateY(0) translateX(-50%); opacity: 0.6; }
  50%       { transform: translateY(8px) translateX(-50%); opacity: 1; }
`;

const AboutSection = styled.section`
  max-width: 1040px;
  margin: 0 auto;
  padding: 96px 32px 120px;
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.4s ease;

  .content-wrapper {
    display: flex;
    gap: 88px;
    align-items: center;

    @media (max-width: 900px) {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 48px;
    }
  }
`;

const ProfilePicture = styled.div`
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  outline: none;
  animation: ${({ $isVisible }) =>
    $isVisible
      ? css`${fadeInLeft} 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s both`
      : "none"};

  &::before {
    content: '';
    position: absolute;
    inset: -28px;
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.primary}18 0%, transparent 72%);
    z-index: -1;
    pointer-events: none;
  }

  img {
    width: 260px;
    height: 260px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
    box-shadow:
      0 0 0 3px ${({ theme }) => theme.colors.primary},
      0 0 0 8px ${({ theme }) => theme.colors.background},
      0 0 0 9px ${({ theme }) => theme.colors.cardBorder},
      0 32px 80px rgba(0, 0, 0, 0.25);
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
    animation: ${({ theme }) => css`${makeRingPulse(theme.colors.primary)} 3.5s ease-in-out infinite`};

    &:hover {
      transform: scale(1.03) rotate(-1deg);
      box-shadow:
        0 0 0 3px ${({ theme }) => theme.colors.primaryHover},
        0 0 0 8px ${({ theme }) => theme.colors.background},
        0 0 0 9px ${({ theme }) => theme.colors.cardBorder},
        0 0 60px ${({ theme }) => theme.colors.profileGlow},
        0 40px 100px rgba(0, 0, 0, 0.35);
    }

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }
`;

const Heart = styled.svg`
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 56px;
  height: 56px;
  animation: ${heartBurst} 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  will-change: transform, opacity;
  filter: drop-shadow(0 2px 8px ${({ theme }) => theme.colors.primary}66);
`;

const TextContent = styled.div`
  flex: 1;
  animation: ${({ $isVisible }) =>
    $isVisible
      ? css`${fadeInRight} 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s both`
      : "none"};

  .greeting {
    font-size: 13px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
      content: '';
      display: inline-block;
      width: 32px;
      height: 1.5px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 1px;
    }
  }

  h1 {
    font-size: clamp(52px, 7vw, 96px);
    font-weight: 800;
    letter-spacing: -0.045em;
    line-height: 1.0;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 20px;

    .wave {
      display: inline-block;
      animation: ${waveHand} 2.5s ease-in-out infinite;
      transform-origin: 70% 70%;
      cursor: default;
    }
  }

  .role-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: 1px solid ${({ theme }) => theme.colors.primary}50;
    border-radius: ${({ theme }) => theme.borderRadiusPill};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 32px;
    background: ${({ theme }) => theme.colors.greenTint};

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary};
      animation: ${({ theme }) => css`${makeRingPulse(theme.colors.primary)} 2s ease-in-out infinite`};
      flex-shrink: 0;
    }
  }

  .bio {
    p {
      font-size: 17px;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 20px;
      line-height: 1.75;
      max-width: 560px;
      letter-spacing: -0.01em;
      opacity: 0;
      animation: ${fadeInUp} 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;

      &:nth-child(1) { animation-delay: 0.35s; }
      &:nth-child(2) { animation-delay: 0.45s; }
      &:nth-child(3) { animation-delay: 0.55s; }

      a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: underline;
        text-underline-offset: 3px;
        text-decoration-thickness: 1px;
        text-decoration-color: ${({ theme }) => theme.colors.primary}60;
        transition: ${({ theme }) => theme.transitionFast};

        &:hover {
          color: ${({ theme }) => theme.colors.primaryHover};
          text-decoration-color: ${({ theme }) => theme.colors.primaryHover};
        }
      }

      strong {
        color: ${({ theme }) => theme.colors.text};
        font-weight: 600;
      }
    }
  }

  .company-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 8px;
    opacity: 0;
    animation: ${fadeInUp} 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.65s forwards;

    span {
      font-size: 12px;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.textTertiary};
      letter-spacing: 0.04em;
    }

    .company-pill {
      padding: 4px 12px;
      border-radius: ${({ theme }) => theme.borderRadiusPill};
      background: ${({ theme }) => theme.colors.accent};
      font-size: 12px;
      color: ${({ theme }) => theme.colors.textSecondary};
      letter-spacing: 0.02em;
      border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    }
  }
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: ${scrollBounce} 2.2s ease-in-out infinite;

  span {
    font-size: 10px;
    font-family: ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textTertiary};
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.textTertiary};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const About = () => {
  const [hearts, setHearts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const { theme, gameMode } = useContext(ThemeContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleDoubleClick = (e) => {
    const id = Math.random().toString(36).substr(2, 9);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.nativeEvent.clientX - rect.left;
    const y = e.nativeEvent.clientY - rect.top;
    setHearts((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1200);
  };

  return (
    <AboutSection id="about" ref={sectionRef} $isVisible={isVisible}>
      <div className="content-wrapper">
        {!gameMode && (
          <ProfilePicture
            $isVisible={isVisible}
            tabIndex={0}
            onDoubleClick={handleDoubleClick}
            aria-label="Profile picture — double click for a surprise"
          >
            <img
              src={`${process.env.PUBLIC_URL}/profile.png`}
              alt={personalInfo.name}
            />
            {hearts.map((h) => (
              <Heart
                key={h.id}
                style={{ left: `${h.x}px`, top: `${h.y}px` }}
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M30 53s-17-10.7-17-23.2C13 19.2 21.2 13 30 21.5 38.8 13 47 19.2 47 29.8 47 42.3 30 53 30 53z"
                  fill={theme === "dark" ? "#ff6b35" : "#e85d04"}
                  stroke={theme === "dark" ? "#ff6b35" : "#e85d04"}
                  strokeWidth="1.5"
                />
              </Heart>
            ))}
          </ProfilePicture>
        )}

        <TextContent $isVisible={isVisible}>
          <div className="greeting">Hello there</div>
          <h1>
            I'm {personalInfo.shortName} <span className="wave">👋</span>
          </h1>
          <div className="role-badge">
            <span className="dot" />
            {personalInfo.description}
          </div>
          <div className="bio">
            {personalInfo.about.map((paragraph, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
          <div className="company-row">
            <span>Currently at</span>
            <span className="company-pill" style={{ boxShadow: "inset 3px 0 0 #ff7a59" }}>HubSpot</span>
            <span>·</span>
            <span>Previously at</span>
            <span className="company-pill" style={{ boxShadow: "inset 3px 0 0 #1877f2" }}>Meta</span>
            <span className="company-pill" style={{ boxShadow: "inset 3px 0 0 #ff9900" }}>Amazon</span>
          </div>
        </TextContent>
      </div>

      <ScrollHint>
        <span>Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </ScrollHint>
    </AboutSection>
  );
};

export default About;
