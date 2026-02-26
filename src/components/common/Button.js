// src/components/common/Button.js

import styled from "styled-components";

const Button = styled.button`
  margin: 20px auto;
  padding: 12px 24px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: block;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.primary}15,
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.greenTint};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${({ theme }) => theme.colors.cardGlow};

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
    transition: transform 0.1s ease;
  }
`;

export default Button;
