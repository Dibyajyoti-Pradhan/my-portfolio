import React, { useContext } from "react";
import styled from "styled-components";
import { personalInfo } from "../data/data";
import { ThemeContext } from "../context/ThemeContext";

const FooterContainer = styled.footer`
  padding: 20px 12px 24px;
  text-align: center;

  .credits {
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textTertiary};
    line-height: 1.6;
    letter-spacing: 0.02em;

    a {
      color: ${({ theme }) => theme.colors.textTertiary};
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .year {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.textTertiary}80;
    margin-top: 4px;
    font-family: ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.04em;
  }
`;

const DevTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 14px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 9px;
  color: ${({ theme }) => theme.colors.textTertiary};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? 0.8 : 0.3)};
  transition: opacity 0.2s ease, color 0.2s ease;
  padding: 4px 6px;
  border-radius: 4px;

  &:hover {
    opacity: 1;
    color: ${({ $active }) => ($active ? "inherit" : "inherit")};
  }

  .trigger-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ $active, theme }) =>
      $active ? theme.colors.primary : theme.colors.textTertiary};
    flex-shrink: 0;
    transition: background 0.2s ease;
    ${({ $active }) => $active && `animation: pulse 2s ease-in-out infinite;`}
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
`;

const Footer = () => {
  const { gameMode } = useContext(ThemeContext);

  const handleDevTrigger = () => {
    document.dispatchEvent(new CustomEvent("toggleGameMode"));
  };

  return (
    <FooterContainer>
      <div className="credits">
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/dibyajyoti-pradhan-83a649146/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {personalInfo.name}
        </a>
      </div>
      <div className="year">© {new Date().getFullYear()}</div>
      <DevTrigger
        $active={gameMode}
        onClick={handleDevTrigger}
        title={gameMode ? "Exit dev mode" : "Enter dev mode"}
        aria-label={gameMode ? "Exit dev mode" : "Enter dev mode"}
      >
        <span className="trigger-dot" />
        &gt;_
      </DevTrigger>
    </FooterContainer>
  );
};

export default Footer;
