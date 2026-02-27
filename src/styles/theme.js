const shared = {
  fonts: {
    main: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    mono: `'SF Mono', 'Fira Code', 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace`,
    display: `'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif`,
  },
  fontSizes: {
    xs: "11px",
    sm: "13px",
    base: "15px",
    lg: "18px",
    xl: "24px",
    xxl: "36px",
    xxxl: "48px",
    hero: "72px",
    display: "96px",
    mega: "128px",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 800,
    black: 900,
  },
  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
  transitionFast: "all 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)",
  transitionSlow: "all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
  transitionSpring: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  borderRadius: "12px",
  borderRadiusSmall: "6px",
  borderRadiusLarge: "18px",
  borderRadiusPill: "980px",
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "40px",
    xl: "72px",
    xxl: "120px",
  },
};

export const darkTheme = {
  ...shared,
  colors: {
    background: "#080809",
    backgroundSecondary: "#0e0e11",
    backgroundTertiary: "#141418",
    backgroundGradient: "linear-gradient(180deg, #080809 0%, #0e0e11 100%)",
    backgroundElevated: "#121216",

    text: "#f2f2f5",
    textSecondary: "#8e8e99",
    textTertiary: "#55555f",

    primary: "#f97316",
    primaryHover: "#fb923c",
    primarySubtle: "rgba(249, 115, 22, 0.08)",
    primaryBorder: "rgba(249, 115, 22, 0.2)",

    secondary: "#0e0e11",
    accent: "#141418",
    accentHover: "#1a1a1f",

    white: "#ffffff",

    darkNavy: "#080809",
    navy: "#0e0e11",
    lightNavy: "#141418",
    headerBackground: "rgba(8, 8, 9, 0.92)",
    linkHover: "#fb923c",

    cardGlow: "rgba(249, 115, 22, 0.15)",
    cardGlowGradient: "rgba(249, 115, 22, 0.06)",
    profileGlow: "rgba(249, 115, 22, 0.35)",
    cardHoverBackground: "rgba(18, 18, 22, 0.98)",
    cardBackground: "rgba(14, 14, 17, 0.7)",
    cardBorder: "rgba(255, 255, 255, 0.05)",
    cardBorderHover: "rgba(249, 115, 22, 0.3)",

    slate: "#8e8e99",
    lightSlate: "#b0b0be",
    lightestSlate: "#d0d0e0",
    green: "#4ade80",

    greenTint: "rgba(249, 115, 22, 0.08)",

    glass: "rgba(12, 12, 15, 0.8)",
    glassBorder: "rgba(255, 255, 255, 0.05)",
    divider: "rgba(255, 255, 255, 0.05)",

    timelineLine: "linear-gradient(180deg, rgba(249,115,22,0.7) 0%, rgba(249,115,22,0.1) 100%)",
    timelineDot: "#f97316",

    hubspot: "#ff7a59",
    meta: "#1877f2",
    amazon: "#ff9900",
  },
  shadows: {
    small: "0 1px 6px rgba(0, 0, 0, 0.5)",
    medium: "0 4px 20px rgba(0, 0, 0, 0.6)",
    large: "0 12px 48px rgba(0, 0, 0, 0.7)",
    glow: "0 0 40px rgba(249, 115, 22, 0.18)",
    card: "0 1px 0 rgba(255,255,255,0.04), 0 2px 16px rgba(0, 0, 0, 0.4)",
    cardHover: "0 0 0 1px rgba(249, 115, 22, 0.25), 0 8px 40px rgba(0, 0, 0, 0.55), 0 0 24px rgba(249,115,22,0.08)",
    inner: "inset 0 1px 0 rgba(255,255,255,0.06)",
  },
};

export const lightTheme = {
  ...shared,
  colors: {
    background: "#f5f5f7",
    backgroundSecondary: "#eaeaef",
    backgroundTertiary: "#dededf",
    backgroundGradient: "linear-gradient(180deg, #f5f5f7 0%, #eaeaef 100%)",
    backgroundElevated: "#ffffff",

    text: "#1d1d1f",
    textSecondary: "#424245",
    textTertiary: "#86868b",

    primary: "#e8650a",
    primaryHover: "#c9540a",
    primarySubtle: "rgba(232, 101, 10, 0.08)",
    primaryBorder: "rgba(232, 101, 10, 0.2)",

    secondary: "#eaeaef",
    accent: "#f0f0f5",
    accentHover: "#e5e5ea",

    white: "#ffffff",

    darkNavy: "#eaeaef",
    navy: "#f5f5f7",
    lightNavy: "#ffffff",
    headerBackground: "rgba(245, 245, 247, 0.92)",
    linkHover: "#c9540a",

    cardGlow: "rgba(232, 101, 10, 0.08)",
    cardGlowGradient: "rgba(232, 101, 10, 0.04)",
    profileGlow: "rgba(232, 101, 10, 0.2)",
    cardHoverBackground: "#ffffff",
    cardBackground: "rgba(255, 255, 255, 0.85)",
    cardBorder: "rgba(0, 0, 0, 0.08)",
    cardBorderHover: "rgba(232, 101, 10, 0.24)",

    slate: "#424245",
    lightSlate: "#636366",
    lightestSlate: "#8e8e93",
    green: "#34c759",

    greenTint: "rgba(232, 101, 10, 0.08)",

    glass: "rgba(255, 255, 255, 0.92)",
    glassBorder: "rgba(0, 0, 0, 0.08)",
    divider: "rgba(0, 0, 0, 0.08)",

    timelineLine: "linear-gradient(180deg, rgba(232,101,10,0.55) 0%, rgba(232,101,10,0.04) 100%)",
    timelineDot: "#e8650a",

    hubspot: "#e85d2e",
    meta: "#1877f2",
    amazon: "#e07b00",
  },
  shadows: {
    small: "0 1px 4px rgba(0, 0, 0, 0.08), 0 0 0 0.5px rgba(0,0,0,0.04)",
    medium: "0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.06)",
    large: "0 12px 48px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06)",
    glow: "0 0 32px rgba(232, 101, 10, 0.12)",
    card: "0 0 0 0.5px rgba(0,0,0,0.06), 0 2px 8px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0,0,0,0.04)",
    cardHover: "0 0 0 1px rgba(232, 101, 10, 0.2), 0 8px 36px rgba(0, 0, 0, 0.12)",
    inner: "inset 0 1px 0 rgba(255,255,255,1)",
  },
};
