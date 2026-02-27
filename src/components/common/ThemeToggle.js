import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const IconButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 13px;
  border-radius: 7px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary}60;
    outline-offset: 2px;
  }
`;

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

  if (gameMode) return null;

  return (
    <IconButton
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <FaMoon size={13} /> : <FaSun size={13} />}
      <VisuallyHidden>{isDark ? "Dark mode" : "Light mode"}</VisuallyHidden>
    </IconButton>
  );
};

export default ThemeToggle;
