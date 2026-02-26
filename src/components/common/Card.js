// src/components/common/Card.js
// Apple-inspired card - Simple. Elegant. Functional.

import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-radius: ${({ theme }) => theme.borderRadiusLarge || "24px"};
  padding: 40px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder || "rgba(255, 255, 255, 0.08)"};
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;

  /* Soft, elevated shadow */
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.04),
    0 10px 20px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: scale(1.02);
    box-shadow:
      0 8px 16px rgba(0, 0, 0, 0.08),
      0 20px 40px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: scale(0.99);
    transition: transform 0.1s ease;
  }

  @media (max-width: 768px) {
    padding: 28px;
    border-radius: 20px;
  }
`;

export default Card;
