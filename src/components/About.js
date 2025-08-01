// src/components/About.js

import React, { useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { personalInfo } from "../data/data";
import { ThemeContext } from "../context/ThemeContext";

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

const AboutSection = styled.section`
  max-width: 1100px;
  margin: 100px auto 0;
  padding: 0 20px;

  .content-wrapper {
    display: flex;
    gap: 50px;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    .profile-picture {
      flex: 1;
      position: relative;
      overflow: visible;
      cursor: pointer;
      outline: none;

      img {
        width: 350px;
        height: 350px;
        object-fit: cover;
        border-radius: 50%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

        &:hover,
        &:focus {
          box-shadow: 0 0 50px 15px ${({ theme }) => theme.colors.profileGlow};
          transform: translateY(-5px);
        }
      }
    }

    .text-content {
      flex: 2;

      h1 {
        font-size: 48px;
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.text};
      }

      h2 {
        font-size: 32px;
        margin-bottom: 20px;
        color: ${({ theme }) => theme.colors.text};
      }

      p {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: 20px;

        a {
          color: ${({ theme }) => theme.colors.primary};
          text-decoration: none;

          &:hover {
            text-decoration: underline;
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
  const { theme } = useContext(ThemeContext);

  const handleDoubleClick = (e) => {
    const id = Math.random().toString(36).substr(2, 9);
    const rect = e.target.getBoundingClientRect();
    // Heart should originate from the double-click position relative to the image
    const x = e.nativeEvent.clientX - rect.left;
    const y = e.nativeEvent.clientY - rect.top;
    setHearts((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1200);
  };

  return (
    <AboutSection id="about">
      <div className="content-wrapper">
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
        <div className="text-content" tabIndex="0">
          <h1>Hi 👋, I'm {personalInfo.shortName}.</h1>
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
