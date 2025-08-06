// src/styles/GlobalStyle.js

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Cormorant:wght@300;400;500;600&display=swap');

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  strong {
    text-decoration: underline;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    background: ${({ theme }) => theme.colors.backgroundGradient};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.5;
    overflow-x: hidden;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      margin-left: 0;
      /* Smoother gradient for mobile, avoids sharp line */
      background: ${({ theme }) => theme.colors.backgroundGradient};
      background-size: 150%;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transition};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.linkHover};
      text-decoration: underline;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 10px 0;
    font-weight: 600;
    line-height: 1.1;
    font-family: ${({ theme }) => theme.fonts.main};
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      font-size: 70%;
    }
  }

  p {
    margin: 0 0 15px 0;
    max-width: 600px;
    font-family: ${({ theme }) => theme.fonts.main};
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition};
    font-family: ${({ theme }) => theme.fonts.main};

    &:focus,
    &:active {
      outline: none;
    }

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  section {
    min-height: 300px;
  }

  header {
    background-color: ${({ theme }) => theme.colors.headerBackground};
  }

  /* Game mode enhancements */
  @keyframes gameGlow {
    0%, 100% {
      box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}33;
    }
    50% {
      box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}66;
    }
  }

  @keyframes floatAnimation {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes pulseAnimation {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes sparkle {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  /* Enhanced scrollbar for game mode */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background || '#000'};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, #4facfe);
    border-radius: 6px;
    border: 2px solid ${({ theme }) => theme.colors.background || '#000'};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}cc, #4facfecc);
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}66;
  }

  /* Enhanced selection colors */
  ::selection {
    background: ${({ theme }) => theme.colors.primary}44;
    color: ${({ theme }) => theme.colors.text};
    text-shadow: none;
  }

  ::-moz-selection {
    background: ${({ theme }) => theme.colors.primary}44;
    color: ${({ theme }) => theme.colors.text};
    text-shadow: none;
  }
`;

export default GlobalStyle;
