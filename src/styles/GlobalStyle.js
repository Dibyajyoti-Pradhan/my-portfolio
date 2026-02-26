// src/styles/GlobalStyle.js
// Apple-inspired global styles - Think Different

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Pixel-perfect rendering */
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern" 1, "liga" 1;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: 400;
    line-height: 1.47059;
    letter-spacing: -0.022em;
    overflow-x: hidden;
  }

  /* Apple's typography system */
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.hero};
    font-weight: 600;
    letter-spacing: -0.009em;
    line-height: 1.0625;
    margin: 0;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: 600;
    letter-spacing: -0.003em;
    line-height: 1.08349;
    margin: 0;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 600;
    letter-spacing: 0.011em;
    line-height: 1.1;
    margin: 0;
  }

  h4, h5, h6 {
    font-weight: 600;
    letter-spacing: 0.012em;
    line-height: 1.14286;
    margin: 0;
  }

  p {
    margin: 0;
    line-height: 1.47059;
    font-weight: 400;
    letter-spacing: -0.022em;
  }

  /* Clean links */
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.main};
    cursor: pointer;
    border: none;
    background: none;
    font-size: inherit;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: 4px solid ${({ theme }) => theme.colors.primary}40;
      outline-offset: 1px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Minimal scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textTertiary || theme.colors.slate}40;
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.colors.textTertiary || theme.colors.slate}60;
    }
  }

  /* Selection */
  ::selection {
    background: ${({ theme }) => theme.colors.primary}25;
  }

  /* Respect user preferences */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyle;
