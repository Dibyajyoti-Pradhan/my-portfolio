const shared = {
  fonts: {
    main: `'Cormorant Garamond', 'Garamond', 'Times New Roman', serif`,
    mono: `'Cormorant', 'Garamond', 'Times New Roman', serif`,
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
    background: "#0f1419",
    backgroundGradient:
      "linear-gradient(145deg, #0f1419 0%, #6b8faf 60%, #0f1419 100%)",
    text: "#e8f4f8",
    primary: "#ff8c42",
    secondary: "#1a2332",
    accent: "#2d3a4a",
    white: "#f0f8ff",
    greenTint: "rgba(255, 140, 66, 0.1)",
    darkNavy: "#0a0f14",
    navy: "#0f1419",
    lightNavy: "#1a2332",
    headerBackground: "#0a0f14",
    linkHover: "#ffa366",
    cardGlow: "rgba(255, 140, 66, 0.2)",
    cardGlowGradient: "rgba(255, 140, 66, 0.15)",
    profileGlow: "rgba(255, 140, 66, 0.7)",
    cardHoverBackground: "rgba(26, 35, 50, 0.8)",
    cardBackground: "rgba(26, 35, 50, 0.6)",
    slate: "#a8c4d4",
    lightSlate: "#ff8c42",
    lightestSlate: "#ffa366",
    green: "#ff8c42",
  },
};

export const lightTheme = {
  ...shared,
  colors: {
    background: "#ffffff",
    backgroundGradient:
      "linear-gradient(145deg, #ffffff 0%, #e0eafc 60%, #ffffff 100%)",
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
