// Apple-inspired elegant theme
// Clean typography, generous spacing, subtle effects

const shared = {
  fonts: {
    // Apple-style system font stack
    main: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    mono: `'SF Mono', 'Menlo', 'Monaco', 'Consolas', monospace`,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    base: "17px",
    lg: "21px",
    xl: "32px",
    xxl: "48px",
    hero: "64px",
    display: "80px",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  // Apple's signature spring animation
  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
  transitionFast: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
  transitionSlow: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
  // Apple's rounded corners
  borderRadius: "12px",
  borderRadiusSmall: "8px",
  borderRadiusLarge: "24px",
  borderRadiusPill: "980px",
  // Generous Apple-style spacing
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "48px",
    xl: "80px",
    xxl: "120px",
  },
  // Soft, diffused Apple shadows
  shadows: {
    small: "0 2px 12px rgba(0, 0, 0, 0.08)",
    medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
    large: "0 20px 60px rgba(0, 0, 0, 0.15)",
    glow: "0 0 80px rgba(0, 0, 0, 0.08)",
  },
};

export const darkTheme = {
  ...shared,
  colors: {
    // Deep, rich dark background
    background: "#000000",
    backgroundSecondary: "#1c1c1e",
    backgroundTertiary: "#2c2c2e",
    backgroundGradient: "linear-gradient(180deg, #000000 0%, #1c1c1e 100%)",

    // Clean text hierarchy
    text: "#f5f5f7",
    textSecondary: "#a1a1a6",
    textTertiary: "#6e6e73",

    // Warm orange accent
    primary: "#ff8c42",
    primaryHover: "#ffa366",
    secondary: "#1c1c1e",
    accent: "#2c2c2e",

    // Supporting colors
    white: "#ffffff",
    greenTint: "rgba(255, 140, 66, 0.1)",

    // Legacy compatibility
    darkNavy: "#000000",
    navy: "#1c1c1e",
    lightNavy: "#2c2c2e",
    headerBackground: "rgba(0, 0, 0, 0.8)",
    linkHover: "#ffa366",

    // Card styling - glassmorphism
    cardGlow: "rgba(255, 140, 66, 0.15)",
    cardGlowGradient: "rgba(255, 140, 66, 0.1)",
    profileGlow: "rgba(255, 140, 66, 0.4)",
    cardHoverBackground: "rgba(44, 44, 46, 0.9)",
    cardBackground: "rgba(28, 28, 30, 0.8)",
    cardBorder: "rgba(255, 255, 255, 0.1)",

    // Text colors
    slate: "#a1a1a6",
    lightSlate: "#d1d1d6",
    lightestSlate: "#e5e5ea",
    green: "#30d158",

    // Glassmorphism
    glass: "rgba(28, 28, 30, 0.7)",
    glassBorder: "rgba(255, 255, 255, 0.08)",
  },
  // Dark mode specific shadows
  shadows: {
    ...shared.shadows,
    small: "0 2px 8px rgba(0, 0, 0, 0.3)",
    medium: "0 4px 20px rgba(0, 0, 0, 0.4)",
    large: "0 12px 40px rgba(0, 0, 0, 0.5)",
    glow: "0 0 60px rgba(255, 140, 66, 0.2)",
  },
};

export const lightTheme = {
  ...shared,
  colors: {
    // Clean white backgrounds
    background: "#ffffff",
    backgroundSecondary: "#f5f5f7",
    backgroundTertiary: "#e8e8ed",
    backgroundGradient: "linear-gradient(180deg, #ffffff 0%, #f5f5f7 100%)",

    // Rich text hierarchy
    text: "#1d1d1f",
    textSecondary: "#6e6e73",
    textTertiary: "#a1a1a6",

    // Warm accent for light theme
    primary: "#e07020",
    primaryHover: "#c96018",
    secondary: "#f5f5f7",
    accent: "#e8e8ed",

    // Supporting colors
    white: "#ffffff",
    greenTint: "rgba(224, 112, 32, 0.08)",

    // Legacy compatibility
    darkNavy: "#e8e8ed",
    navy: "#f5f5f7",
    lightNavy: "#ffffff",
    headerBackground: "rgba(255, 255, 255, 0.8)",
    linkHover: "#c96018",

    // Card styling
    cardGlow: "rgba(224, 112, 32, 0.1)",
    cardGlowGradient: "rgba(224, 112, 32, 0.08)",
    profileGlow: "rgba(224, 112, 32, 0.3)",
    cardHoverBackground: "#ffffff",
    cardBackground: "#f5f5f7",
    cardBorder: "rgba(0, 0, 0, 0.06)",

    // Text colors
    slate: "#6e6e73",
    lightSlate: "#86868b",
    lightestSlate: "#a1a1a6",
    green: "#34c759",

    // Glassmorphism
    glass: "rgba(255, 255, 255, 0.7)",
    glassBorder: "rgba(0, 0, 0, 0.06)",
  },
};
