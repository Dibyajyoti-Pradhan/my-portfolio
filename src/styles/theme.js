// src/styles/theme.js

const shared = {
  fonts: {
    main: `'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif`,
    mono: `'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace`,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "24px",
    xxl: "32px",
  },
  transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
  borderRadius: "4px",
};

export const darkTheme = {
  ...shared,
  colors: {
    background: "#0a192f",
    text: "#a8b2d1",
    primary: "#64ffda",
    secondary: "#112240",
    accent: "#233554",
    white: "#e6f1ff",
    greenTint: "rgba(100, 255, 218, 0.1)",
    darkNavy: "#020c1b",
    navy: "#0a192f",
    lightNavy: "#112240",
    headerBackground: "#020c1b",
    linkHover: "#64ffda",
    cardGlow: "rgba(0, 255, 255, 0.2)", // Updated to match original glow color
    cardGlowGradient: "rgba(100, 255, 218, 0.15)", // For radial gradient in ::before
    profileGlow: "rgba(100, 255, 218, 0.7)", // Increased opacity and adjusted color
    cardHoverBackground: "rgba(17, 34, 64, 0.8)", // Background on hover
    cardBackground: "rgba(17, 34, 64, 0.6)", // Original card background color
    slate: "#8892b0",
    lightSlate: "#a8b2d1",
    lightestSlate: "#ccd6f6",
    green: "#64ffda",
  },
};

export const lightTheme = {
  ...shared,
  colors: {
    background: "#ffffff",
    text: "#333333",
    primary: "#007acc",
    secondary: "#f0f0f0",
    accent: "#e0e0e0",
    white: "#ffffff",
    greenTint: "rgba(0, 122, 204, 0.1)",
    darkNavy: "#e0e0e0",
    navy: "#f0f0f0",
    lightNavy: "#f8f8f8",
    headerBackground: "#ffffff",
    linkHover: "#007acc",
    cardGlow: "rgba(0, 122, 204, 0.2)",
    cardGlowGradient: "rgba(0, 122, 204, 0.15)",
    profileGlow: "rgba(0, 122, 204, 0.7)", // Adjusted for light theme
    cardHoverBackground: "#e6f1ff",
    cardBackground: "#f0f0f0",
    slate: "#666666",
    lightSlate: "#888888",
    lightestSlate: "#aaaaaa",
    green: "#007acc",
  },
};
