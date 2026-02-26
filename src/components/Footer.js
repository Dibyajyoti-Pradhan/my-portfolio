import React from "react";
import styled from "styled-components";
import { personalInfo } from "../data/data";

const FooterContainer = styled.footer`
  padding: 20px 12px 16px;
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

const Footer = () => (
  <FooterContainer>
    <div className="credits">
      Designed &amp; built by{" "}
      <a
        href="https://www.linkedin.com/in/dibyajyoti-pradhan-83a649146/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {personalInfo.name}
      </a>
    </div>
    <div className="year">© {new Date().getFullYear()}</div>
  </FooterContainer>
);

export default Footer;
