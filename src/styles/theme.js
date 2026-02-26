const shared = {
  fonts: {
    main: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    mono: `'SF Mono', 'Fira Code', 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace`,
  },
  fontSizes: {
    xs: "11px",
    sm: "13px",
    base: "16px",
    lg: "19px",
    xl: "28px",
    xxl: "40px",
    xxxl: "52px",
    hero: "72px",
    display: "92px",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 800,
  },
  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
  transitionFast: "all 0.18s cubic-bezier(0.25, 0.1, 0.25, 1)",
  transitionSlow: "all 0.55s cubic-bezier(0.25, 0.1, 0.25, 1)",
  borderRadius: "14px",
  borderRadiusSmall: "8px",
  borderRadiusLarge: "20px",
  borderRadiusPill: "980px",
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "48px",
    xl: "80px",
    xxl: "128px",
  },
};

export const darkTheme = {
  ...shared,
  colors: {
    background: "#09090b",
    backgroundSecondary: "#111114",
    backgroundTertiary: "#18181c",
    backgroundGradient: "linear-gradient(180deg, #09090b 0%, #111114 100%)",
    backgroundElevated: "#141418",

    text: "#f5f5f7",
    textSecondary: "#98989f",
    textTertiary: "#636370",

    primary: "#ff6b35",
    primaryHover: "#ff8c5a",
    secondary: "#111114",
    accent: "#18181c",

    white: "#ffffff",
    greenTint: "rgba(255, 107, 53, 0.08)",

    darkNavy: "#09090b",
    navy: "#111114",
    lightNavy: "#18181c",
    headerBackground: "rgba(9, 9, 11, 0.88)",
    linkHover: "#ff8c5a",

    cardGlow: "rgba(255, 107, 53, 0.2)",
    cardGlowGradient: "rgba(255, 107, 53, 0.08)",
    profileGlow: "rgba(255, 107, 53, 0.4)",
    cardHoverBackground: "rgba(20, 20, 24, 0.98)",
    cardBackground: "rgba(17, 17, 20, 0.88)",
    cardBorder: "rgba(255, 255, 255, 0.07)",
    cardBorderHover: "rgba(255, 107, 53, 0.28)",

    slate: "#98989f",
    lightSlate: "#bebec8",
    lightestSlate: "#dcdce6",
    green: "#30d158",

    glass: "rgba(14, 14, 17, 0.75)",
    glassBorder: "rgba(255, 255, 255, 0.06)",
    divider: "rgba(255, 255, 255, 0.06)",
  },
  shadows: {
    small: "0 1px 8px rgba(0, 0, 0, 0.45)",
    medium: "0 4px 24px rgba(0, 0, 0, 0.55)",
    large: "0 12px 48px rgba(0, 0, 0, 0.65)",
    glow: "0 0 48px rgba(255, 107, 53, 0.2)",
    card: "0 2px 20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)",
    cardHover: "0 8px 48px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 107, 53, 0.22)",
  },
};

export const lightTheme = {
  ...shared,
  colors: {
    background: "#ffffff",
    backgroundSecondary: "#f5f5f7",
    backgroundTertiary: "#eaeaee",
    backgroundGradient: "linear-gradient(180deg, #ffffff 0%, #f5f5f7 100%)",
    backgroundElevated: "#f8f8fa",

    text: "#111114",
    textSecondary: "#6b6b74",
    textTertiary: "#9898a2",

    primary: "#e85d04",
    primaryHover: "#c94e00",
    secondary: "#f5f5f7",
    accent: "#eaeaee",

    white: "#ffffff",
    greenTint: "rgba(232, 93, 4, 0.07)",

    darkNavy: "#eaeaee",
    navy: "#f5f5f7",
    lightNavy: "#ffffff",
    headerBackground: "rgba(255, 255, 255, 0.9)",
    linkHover: "#c94e00",

    cardGlow: "rgba(232, 93, 4, 0.12)",
    cardGlowGradient: "rgba(232, 93, 4, 0.06)",
    profileGlow: "rgba(232, 93, 4, 0.28)",
    cardHoverBackground: "#ffffff",
    cardBackground: "#f8f8fa",
    cardBorder: "rgba(0, 0, 0, 0.06)",
    cardBorderHover: "rgba(232, 93, 4, 0.22)",

    slate: "#6b6b74",
    lightSlate: "#8a8a93",
    lightestSlate: "#a8a8b2",
    green: "#34c759",

    glass: "rgba(255, 255, 255, 0.78)",
    glassBorder: "rgba(0, 0, 0, 0.05)",
    divider: "rgba(0, 0, 0, 0.06)",
  },
  shadows: {
    small: "0 1px 6px rgba(0, 0, 0, 0.06)",
    medium: "0 4px 20px rgba(0, 0, 0, 0.08)",
    large: "0 12px 40px rgba(0, 0, 0, 0.1)",
    glow: "0 0 40px rgba(232, 93, 4, 0.1)",
    card: "0 1px 12px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)",
    cardHover: "0 6px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(232, 93, 4, 0.18)",
  },
};
