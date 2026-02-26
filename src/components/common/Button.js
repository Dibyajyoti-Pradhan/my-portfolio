import styled from "styled-components";

const Button = styled.button`
  display: block;
  margin: 48px auto 0;
  padding: 12px 32px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: 1.5px solid ${({ theme }) => theme.colors.primary}70;
  border-radius: ${({ theme }) => theme.borderRadiusPill};
  cursor: pointer;
  transition: all 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);
  text-align: center;
  min-width: 160px;
  font-family: ${({ theme }) => theme.fonts.main};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px ${({ theme }) => theme.colors.primary}40;
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }
`;

export default Button;
