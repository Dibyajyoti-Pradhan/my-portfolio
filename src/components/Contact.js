// src/components/Contact.js

import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { personalInfo, socialLinks } from "../data/data";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFileDownload,
  FaCode,
} from "react-icons/fa";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const drawLine = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

const ContactSection = styled.section`
  max-width: 1100px;
  margin: 100px auto;
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    display: inline-block;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    animation: ${({ $isVisible }) =>
      $isVisible
        ? css`${fadeInUp} 0.6s ease forwards`
        : "none"};

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.primary}, transparent);
      animation: ${({ $isVisible }) =>
        $isVisible
          ? css`${drawLine} 0.8s ease 0.4s forwards`
          : "none"};
      transform-origin: center;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 40px;
    max-width: 500px;
    line-height: 1.6;
    opacity: 0;
    animation: ${({ $isVisible }) =>
      $isVisible
        ? css`${fadeInUp} 0.6s ease 0.2s forwards`
        : "none"};
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;

    a {
      color: ${({ theme }) => theme.colors.primary};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 1rem 1.75rem;
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.mono};
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: relative;
      overflow: hidden;
      opacity: 0;
      animation: ${({ $isVisible }) =>
        $isVisible
          ? css`${scaleIn} 0.5s ease forwards`
          : "none"};

      &:nth-child(1) { animation-delay: 0.3s; }
      &:nth-child(2) { animation-delay: 0.4s; }
      &:nth-child(3) { animation-delay: 0.5s; }

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

      &:hover {
        background-color: ${({ theme }) => theme.colors.greenTint};
        transform: translateY(-3px);
        box-shadow: 0 8px 20px ${({ theme }) => theme.colors.cardGlow};

        &::before {
          left: 100%;
        }
      }

      svg {
        font-size: 20px;
        transition: transform 0.3s ease;
      }

      &:hover svg {
        transform: scale(1.2);
      }
    }
  }

  .email-link {
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1rem 1.75rem;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.mono};
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover {
      background-color: ${({ theme }) => theme.colors.greenTint};
      transform: translateY(-3px);
      box-shadow: 0 8px 20px ${({ theme }) => theme.colors.cardGlow};
    }
  }

  .social-link-row2 {
    display: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.greenTint};
      transform: translateY(-3px);
    }

    svg {
      font-size: 20px;
    }

    @media (max-width: 768px) {
      display: inline-flex;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 1rem 1.75rem;
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.mono};
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      margin-top: 20px;
      align-items: center;
      gap: 10px;
    }
  }
`;

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const linkedinUrl = socialLinks.find((link) => link.name === "LinkedIn").url;
  const leetCodeUrl = socialLinks.find((link) => link.name === "LeetCode").url;
  const instagramUrl = socialLinks.find(
    (link) => link.name === "Instagram"
  ).url;

  return (
    <ContactSection id="contact" ref={sectionRef} $isVisible={isVisible}>
      <h2>{personalInfo.contact.heading}</h2>
      <p>{personalInfo.contact.message}</p>
      <div className="contact-links">
        <a href={leetCodeUrl} target="_blank" rel="noopener noreferrer">
          <FaCode /> LeetCode
        </a>
        <a className="email-link" href={`mailto:${personalInfo.contact.email}`}>
          <FaEnvelope /> Email
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
      </div>
      <div className="contact-links">
        <a
          className="social-link-row2"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          className="social-link-row2"
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload /> Download Résumé
        </a>
      </div>
    </ContactSection>
  );
};

export default Contact;
