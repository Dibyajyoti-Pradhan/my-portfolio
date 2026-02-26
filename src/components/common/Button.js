// src/components/common/Button.js
// Apple-style button - Purposeful and tactile

import styled from "styled-components";

const Button = styled.button`
  display: block;
  margin: 40px auto;
  padding: 18px 36px;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.022em;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadiusPill || "980px"};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  text-align: center;
  min-width: 140px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.1s ease;
  }
`;

export default Button;
