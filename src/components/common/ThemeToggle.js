// src/components/common/ThemeToggle.js

import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

/*
  Fancy animated dark-mode toggle inspired by Cassie Evans (https://www.cassie.codes/)
  -----------------------------------------------------------------------------
  • Pill-shaped button; thumb slides L/R while morphing between ☀️ / 🌙 icons.
  • Subtle sparkles appear around the moon for extra delight.
  • Accessible – hidden label read by screen-readers.
*/

// Sparkle keyframes (only rendered in dark mode)
const sparkle = keyframes`
  0%   { transform: scale(0)   rotate(0deg);   opacity: 1; }
  60%  { transform: scale(1)   rotate(144deg); opacity: 1; }
  100% { transform: scale(0)   rotate(288deg); opacity: 0; }
`;

const Sparkle = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  pointer-events: none;
  filter: drop-shadow(0 0 2px ${({ theme }) => theme.colors.white});
  animation: ${sparkle} 1.25s ease-out forwards;
`;

// --- Toggle styles ----------------------------------------------------------
const ToggleButton = styled.button`
  position: relative;
  width: 64px;
  height: 32px;
  padding: 0 4px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 9999px;
  background: ${({ isDark, theme }) =>
    isDark
      ? `linear-gradient(135deg, ${theme.colors.navy} 0%, ${theme.colors.headerBackground} 100%)`
      : `linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.secondary} 100%)`};
  display: flex;
  align-items: center;
  justify-content: ${({ isDark }) => (isDark ? "flex-end" : "flex-start")};
  cursor: pointer;
  transition: background 0.3s ease, justify-content 0.25s ease;
  outline: none;
`;

const Thumb = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.headerBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease, background 0.25s ease;
`;

// Visually hidden text for accessibility
const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;
`;

const ThemeToggle = () => {
  const { theme, toggleTheme, gameMode } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const handleToggle = () => {
    // Only toggle if not in game mode
    if (!gameMode) {
      toggleTheme();
    }
  };

  // Hide theme toggle in game mode
  if (gameMode) {
    return null;
  }

  return (
    <ToggleButton onClick={handleToggle} isDark={isDark} aria-label="Toggle theme">
      <Thumb>
        {isDark ? <FaMoon size={14} /> : <FaSun size={14} />}
        {isDark && <Sparkle style={{ top: "30%", left: "70%" }} />}
        {isDark && <Sparkle style={{ top: "70%", left: "35%", animationDelay: "0.15s" }} />}
      </Thumb>
      <VisuallyHidden>{isDark ? "Dark mode" : "Light mode"}</VisuallyHidden>
    </ToggleButton>
  );
};

export default ThemeToggle;
