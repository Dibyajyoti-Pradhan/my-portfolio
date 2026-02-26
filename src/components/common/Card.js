// src/components/common/Card.js

import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 15px; /* Rounded corners */
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -20%;
    left: -20%;
    width: 140%;
    height: 140%;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.colors.cardGlowGradient},
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease;
    transform: scale(0.9);
    filter: blur(30px);
    pointer-events: none;
  }

  &:hover,
  &:focus {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px ${({ theme }) => theme.colors.cardGlow};
    background: ${({ theme }) => theme.colors.cardHoverBackground};

    &::before {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;

export default Card;
