// src/components/About.js

import React, { useState, useContext, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { personalInfo } from "../data/data";
import { ThemeContext } from "../context/ThemeContext";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const heartBurst = keyframes`
  0% {
    opacity: 0.8;
    transform: scale(0.7) translateY(0);
  }
  30% {
    opacity: 1;
    transform: scale(1.1) translateY(-10px);
  }
  60% {
    opacity: 1;
    transform: scale(1) translateY(-60px);
  }
  100% {
    opacity: 0;
    transform: scale(0.8) translateY(-120px);
  }
`;

const waveHand = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

const drawUnderline = keyframes`
  from {
    transform: scaleX(0);
    transform-origin: left;
  }
  to {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const evilPulse = keyframes`
  0%, 100% {
    box-shadow:
      0 0 30px rgba(255, 0, 0, 0.8),
      0 0 60px rgba(255, 0, 0, 0.6),
      inset 0 0 30px rgba(255, 0, 0, 0.3);
    transform: scale(1);
  }
  50% {
    box-shadow:
      0 0 40px rgba(255, 0, 0, 1),
      0 0 80px rgba(255, 0, 0, 0.8),
      inset 0 0 40px rgba(255, 0, 0, 0.5);
    transform: scale(1.02);
  }
`;

const AboutSection = styled.section`
  max-width: 980px;
  margin: 0 auto;
  padding: 100px 24px 120px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;

  .content-wrapper {
    display: flex;
    gap: 100px;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 60px;
    }

    .profile-picture {
      flex-shrink: 0;
      position: relative;
      overflow: visible;
      cursor: pointer;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: ${({ $isVisible }) => $isVisible ? css`${fadeInLeft} 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards` : 'none'};

      img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 50%;
        transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
        box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);

        &:hover {
          transform: scale(1.04);
        }

        @media (max-width: 768px) {
          width: 240px;
          height: 240px;
        }
      }

      .evil-icon {
        width: 280px;
        height: 280px;
        border-radius: 50%;
        background: linear-gradient(135deg, #1a0000, #330000, #1a0000);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 120px;
        color: #ff0000;
        border: 3px solid #ff0000;
        animation: ${evilPulse} 2s infinite;
        transition: transform 0.3s ease;
        filter: drop-shadow(0 0 20px #ff0000);

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .text-content {
      flex: 1;
      animation: ${({ $isVisible }) => $isVisible ? css`${fadeInRight} 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) 0.15s forwards` : 'none'};
      opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};

      h1 {
        font-size: 64px;
        font-weight: 600;
        letter-spacing: -0.009em;
        line-height: 1.05;
        margin-bottom: 12px;
        color: ${({ theme }) => theme.colors.text};

        @media (max-width: 768px) {
          font-size: 44px;
        }

        .wave {
          display: inline-block;
          animation: ${waveHand} 2.5s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
      }

      h2 {
        font-size: 28px;
        font-weight: 400;
        letter-spacing: -0.016em;
        margin-bottom: 32px;
        color: ${({ theme }) => theme.colors.primary};

        @media (max-width: 768px) {
          font-size: 22px;
        }
      }

      p {
        font-size: 19px;
        color: ${({ theme }) => theme.colors.textSecondary || theme.colors.slate};
        margin-bottom: 24px;
        line-height: 1.5;
        max-width: 560px;
        letter-spacing: -0.022em;
        opacity: 0;
        animation: ${fadeInUp} 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;

        &:nth-child(3) { animation-delay: 0.3s; }
        &:nth-child(4) { animation-delay: 0.4s; }
        &:nth-child(5) { animation-delay: 0.5s; }

        a {
          color: ${({ theme }) => theme.colors.primary};
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
          transition: ${({ theme }) => theme.transition};

          &:hover {
            color: ${({ theme }) => theme.colors.linkHover};
          }
        }
      }
    }
  }
`;

const Heart = styled.svg`
  position: absolute;
  left: 50%;
  top: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 60px;
  height: 60px;
  animation: ${heartBurst} 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  will-change: transform, opacity;
  filter: drop-shadow(0 2px 8px #ffb86b88);
`;

const About = () => {
  const [hearts, setHearts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const { theme, gameMode } = useContext(ThemeContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDoubleClick = (e) => {
    const id = Math.random().toString(36).substr(2, 9);
    const rect = e.target.getBoundingClientRect();
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
          <div
            className="profile-picture"
            tabIndex={0}
            onDoubleClick={handleDoubleClick}
          >
            <img
              tabIndex="0"
              src={`${process.env.PUBLIC_URL}/profile.png`}
              alt={personalInfo.name}
            />
            {hearts.map((h) => (
              <Heart
                key={h.id}
                style={{
                  left: h.x ? `${h.x}px` : "50%",
                  top: h.y ? `${h.y}px` : "50%",
                }}
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M30 53s-17-10.7-17-23.2C13 19.2 21.2 13 30 21.5 38.8 13 47 19.2 47 29.8 47 42.3 30 53 30 53z"
                  fill={theme === "dark" ? "#ffb86b" : "#007acc"}
                  stroke={theme === "dark" ? "#ffb86b" : "#007acc"}
                  strokeWidth="2"
                />
              </Heart>
            ))}
          </div>
        )}
        <div className="text-content" tabIndex="0">
          <h1>Hi <span className="wave">👋</span>, I'm {personalInfo.shortName}.</h1>
          <h2>{personalInfo.description}</h2>
          {personalInfo.about.map((paragraph, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
