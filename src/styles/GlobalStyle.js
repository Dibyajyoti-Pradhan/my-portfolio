import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
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
    line-height: 1.6;
    letter-spacing: -0.014em;
    overflow-x: hidden;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.hero};
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.02;
    margin: 0;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: 800;
    letter-spacing: -0.035em;
    line-height: 1.06;
    margin: 0;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 700;
    letter-spacing: -0.022em;
    line-height: 1.2;
    margin: 0;
  }

  h4, h5, h6 {
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.3;
    margin: 0;
  }

  p {
    margin: 0;
    line-height: 1.7;
    font-weight: 400;
    letter-spacing: -0.01em;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitionFast};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
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
      outline: 2px solid ${({ theme }) => theme.colors.primary}55;
      outline-offset: 2px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textTertiary}45;
    border-radius: 3px;

    &:hover {
      background: ${({ theme }) => theme.colors.textTertiary}75;
    }
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary}20;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyle;
