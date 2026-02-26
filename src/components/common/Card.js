import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  padding: 32px 36px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
  box-shadow: ${({ theme }) => theme.shadows.card};

  &:hover {
    border-color: ${({ theme }) => theme.colors.cardBorderHover};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0) scale(0.99);
    transition: transform 0.1s ease;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export default Card;
