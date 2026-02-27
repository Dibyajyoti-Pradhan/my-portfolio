import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "ss01" 1;
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
    line-height: 1.65;
    letter-spacing: -0.012em;
    overflow-x: hidden;
    font-variant-numeric: tabular-nums;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: 99999;
    pointer-events: none;
    opacity: 0.028;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 200px 200px;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.hero};
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 0.96;
    margin: 0;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.05;
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
    line-height: 1.72;
    font-weight: 400;
    letter-spacing: -0.008em;
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
      outline: 2px solid ${({ theme }) => theme.colors.primary}60;
      outline-offset: 3px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textTertiary}55;
    border-radius: 2px;

    &:hover {
      background: ${({ theme }) => theme.colors.textTertiary}80;
    }
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary}22;
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
