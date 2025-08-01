import React from "react";
import styled from "styled-components";
import { personalInfo, socialLinks } from "../data/data";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCode,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 40px 20px;
  text-align: center;

  .social-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  .social-icons a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 28px;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: scale(1.2);
    }
  }

  .footer-text,
  .credits {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    margin: 5px 0;
  }

  .footer-text a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <div className="social-icons">
      {socialLinks.map(({ id, name, url }) => {
        let Icon;
        switch (name) {
          case "GitHub":
            Icon = FaGithub;
            break;
          case "LinkedIn":
            Icon = FaLinkedin;
            break;
          case "Twitter":
            Icon = FaTwitter;
            break;
          case "Instagram":
            Icon = FaInstagram;
            break;
          default:
            Icon = FaCode;
        }
        return (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
    <div className="footer-text">
      Designed & Built by{" "}
      <a
        href="https://www.linkedin.com/in/dibyajyoti-pradhan-83a649146/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {personalInfo.name}
      </a>
    </div>
    <div className="credits">
      © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
    </div>
  </FooterContainer>
);

export default Footer;
