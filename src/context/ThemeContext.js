// src/context/ThemeContext.js

import React, { createContext, useState, useEffect } from "react";
import { darkTheme, lightTheme } from "../styles/theme";

export const ThemeContext = createContext();



export const ThemeProvider = ({ children, gameMode }) => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // In game/dev mode, use the user's selected theme for content colors
  // but keep dark theme structure for gaming elements
  const effectiveTheme = theme;
  const baseThemeStyles = effectiveTheme === "dark" ? darkTheme : lightTheme;

  // In game mode, create a hybrid theme that uses the user's theme colors
  // for content but keeps gaming-specific styling
  const themeStyles = gameMode ? {
    ...baseThemeStyles,
    // Keep these properties for gaming elements to maintain their special appearance
    // The gaming components will still use their hardcoded green colors
  } : baseThemeStyles;

  const toggleTheme = () => {
    // Allow theme toggling in both modes
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme: effectiveTheme, toggleTheme, isDarkMode: effectiveTheme === 'dark', gameMode }}>
      {children(themeStyles)}
    </ThemeContext.Provider>
  );
};
