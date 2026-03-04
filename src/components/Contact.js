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
import { fadeInUp } from "../styles/animations";

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
`;

const ContactSection = styled.section`
  max-width: 900px;
  margin: 128px auto 100px;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto 80px;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 64px;
  opacity: 0;
  animation: ${({ $visible }) => $visible ? css`${fadeInUp} 0.5s ease forwards` : "none"};

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;

    .num {
      font-size: 11px;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.textTertiary};
      font-weight: 600;
      letter-spacing: 0.1em;
    }

    .line {
      width: 32px;
      height: 1px;
      background: ${({ theme }) => theme.colors.divider};
      border-radius: 1px;
    }
  }

  h2 {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 900;
    letter-spacing: -0.045em;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 13px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textTertiary};
    letter-spacing: 0.02em;
  }
`;

const ContactCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  padding: 52px 48px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.card};
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation: ${({ $visible }) => $visible ? css`${scaleIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s forwards` : "none"};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.divider};
  }

  @media (max-width: 600px) {
    padding: 36px 24px;
  }
`;

const BigTitle = styled.h2`
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 0.95;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 44px;
  max-width: 400px;
  line-height: 1.72;
  font-size: 15px;
  letter-spacing: -0.008em;
  margin-left: auto;
  margin-right: auto;
`;

const EmailButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 36px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: ${({ theme }) => theme.borderRadiusPill};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-decoration: none;
  transition: all 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);
  margin-bottom: 40px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.primary}35;

  svg {
    font-size: 16px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    box-shadow: 0 8px 32px ${({ theme }) => theme.colors.primary}50;
    text-decoration: none;
    color: #fff;
  }
`;

const Divider = styled.p`
  font-size: 11px;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: 20px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SocialButton = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 17px;
  text-decoration: none;
  transition: all 0.18s cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
    border-color: ${({ theme }) => theme.colors.primaryBorder};
    color: ${({ theme }) => theme.colors.text};
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
    <ContactSection id="contact" ref={sectionRef}>
      <SectionHeader $visible={isVisible}>
        <div className="eyebrow">
          <span className="num">08</span>
          <div className="line" />
        </div>
        <h2>Get In Touch</h2>
        <p className="subtitle">Let's make something great together</p>
      </SectionHeader>

      <ContactCard $visible={isVisible}>
        <BigTitle>
          Let's <span>Talk.</span>
        </BigTitle>
        <Subtitle>{personalInfo.contact.message}</Subtitle>
        <EmailButton href={`mailto:${personalInfo.contact.email}`}>
          <FaEnvelope />
          Say Hello
        </EmailButton>
        <Divider>— or find me on —</Divider>
        <SocialRow>
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
        </SocialRow>
      </ContactCard>
    </ContactSection>
  );
};

export default Contact;
