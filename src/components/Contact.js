import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { personalInfo, socialLinks } from "../data/data";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
`;

const ContactSection = styled.section`
  max-width: 680px;
  margin: 160px auto 80px;
  padding: 0 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;

  .section-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 14px;
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 500;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    animation: ${({ $isVisible }) =>
      $isVisible ? css`${fadeInUp} 0.4s ease forwards` : "none"};

    &::before,
    &::after {
      content: '';
      flex: 1;
      max-width: 40px;
      height: 1px;
      background: ${({ theme }) => theme.colors.primary}60;
    }
  }

  h2 {
    font-size: clamp(40px, 5vw, 64px);
    font-weight: 800;
    letter-spacing: -0.04em;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.04;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    animation: ${({ $isVisible }) =>
      $isVisible
        ? css`${fadeInUp} 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.05s forwards`
        : "none"};

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .subtitle {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 52px;
    max-width: 480px;
    line-height: 1.72;
    font-size: 17px;
    letter-spacing: -0.01em;
    opacity: 0;
    animation: ${({ $isVisible }) =>
      $isVisible
        ? css`${fadeInUp} 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards`
        : "none"};
  }

  .primary-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 40px;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-radius: ${({ theme }) => theme.borderRadiusPill};
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.015em;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
    margin-bottom: 48px;
    box-shadow: 0 4px 24px ${({ theme }) => theme.colors.primary}40;
    opacity: 0;
    animation: ${({ $isVisible }) =>
      $isVisible
        ? css`${scaleIn} 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.28s forwards`
        : "none"};

    svg {
      font-size: 18px;
      transition: transform 0.2s;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 8px 36px ${({ theme }) => theme.colors.primary}55;
      text-decoration: none;
      color: #fff;

      svg {
        transform: scale(1.15);
      }
    }

    &:active {
      transform: translateY(0) scale(0.99);
    }
  }

  .social-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    opacity: 0;
    animation: ${({ $isVisible }) =>
      $isVisible
        ? css`${fadeInUp} 0.4s ease 0.38s forwards`
        : "none"};
  }

  .divider-text {
    font-size: 12px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textTertiary};
    margin-bottom: 24px;
    letter-spacing: 0.08em;
    opacity: 0;
    animation: ${({ $isVisible }) =>
      $isVisible ? css`${fadeInUp} 0.4s ease 0.32s forwards` : "none"};
  }
`;

const SocialButton = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 18px;
  text-decoration: none;
  transition: all 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    background: ${({ theme }) => theme.colors.greenTint};
    border-color: ${({ theme }) => theme.colors.primary}50;
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px ${({ theme }) => theme.colors.cardGlow};
    text-decoration: none;
  }
`;

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const linkedinUrl = socialLinks.find((l) => l.name === "LinkedIn")?.url;
  const githubUrl = socialLinks.find((l) => l.name === "GitHub")?.url;
  const instagramUrl = socialLinks.find((l) => l.name === "Instagram")?.url;
  const leetcodeUrl = socialLinks.find((l) => l.name === "LeetCode")?.url;

  return (
    <ContactSection id="contact" ref={sectionRef} $isVisible={isVisible}>
      <div className="section-label">08</div>
      <h2>
        Let's <span>Talk.</span>
      </h2>
      <p className="subtitle">{personalInfo.contact.message}</p>
      <a
        className="primary-cta"
        href={`mailto:${personalInfo.contact.email}`}
      >
        <FaEnvelope />
        Say Hello
      </a>
      <p className="divider-text">— or find me on —</p>
      <div className="social-row">
        {githubUrl && (
          <SocialButton href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </SocialButton>
        )}
        {linkedinUrl && (
          <SocialButton href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialButton>
        )}
        {instagramUrl && (
          <SocialButton href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </SocialButton>
        )}
        {leetcodeUrl && (
          <SocialButton href={leetcodeUrl} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <FaCode />
          </SocialButton>
        )}
      </div>
    </ContactSection>
  );
};

export default Contact;
