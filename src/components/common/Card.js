// src/components/common/Card.js

import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 16px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.4s ease,
    background 0.4s ease;
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  outline: none;
  cursor: pointer;

  /* Subtle top border accent */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.primary}60,
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  /* Ambient glow effect */
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      ${({ theme }) => theme.colors.primary}08 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover,
  &:focus {
    transform: translateY(-8px);
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.2),
      0 0 0 1px ${({ theme }) => theme.colors.primary}20,
      0 0 60px ${({ theme }) => theme.colors.cardGlow};
    background: ${({ theme }) => theme.colors.cardHoverBackground};

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }

  /* Smooth press effect */
  &:active {
    transform: translateY(-4px);
    transition: transform 0.1s ease;
  }
`;

export default Card;
