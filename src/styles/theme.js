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
    background: "#f2f2f7",
    backgroundSecondary: "#e5e5ea",
    backgroundTertiary: "#d1d1d6",
    backgroundGradient: "linear-gradient(180deg, #f2f2f7 0%, #e5e5ea 100%)",
    backgroundElevated: "#ffffff",

    text: "#1d1d1f",
    textSecondary: "#515154",
    textTertiary: "#86868b",

    primary: "#e85d04",
    primaryHover: "#bf4d02",
    secondary: "#e5e5ea",
    accent: "#ebebef",

    white: "#ffffff",
    greenTint: "rgba(232, 93, 4, 0.08)",

    darkNavy: "#e5e5ea",
    navy: "#f2f2f7",
    lightNavy: "#ffffff",
    headerBackground: "rgba(255, 255, 255, 0.92)",
    linkHover: "#bf4d02",

    cardGlow: "rgba(232, 93, 4, 0.12)",
    cardGlowGradient: "rgba(232, 93, 4, 0.06)",
    profileGlow: "rgba(232, 93, 4, 0.28)",
    cardHoverBackground: "#ffffff",
    cardBackground: "#ffffff",
    cardBorder: "rgba(0, 0, 0, 0.08)",
    cardBorderHover: "rgba(232, 93, 4, 0.25)",

    slate: "#515154",
    lightSlate: "#6b6b74",
    lightestSlate: "#8a8a93",
    green: "#34c759",

    glass: "rgba(255, 255, 255, 0.92)",
    glassBorder: "rgba(0, 0, 0, 0.08)",
    divider: "rgba(0, 0, 0, 0.08)",
  },
  shadows: {
    small: "0 1px 4px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05)",
    medium: "0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05)",
    large: "0 12px 40px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06)",
    glow: "0 0 40px rgba(232, 93, 4, 0.12)",
    card: "0 1px 4px rgba(0, 0, 0, 0.07), 0 4px 16px rgba(0, 0, 0, 0.05)",
    cardHover: "0 4px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(232, 93, 4, 0.2)",
  },
};
