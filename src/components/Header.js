// src/components/Header.js

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { navLinks, personalInfo } from "../data/data";
import ThemeToggle from "./common/ThemeToggle";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderContainer = styled.header`
  width: 100%;
  background-color: transparent;

  .logo {
    margin-top: 48px;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0;
    animation: ${fadeIn} 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;

    a {
      color: inherit;
      text-decoration: none;
      position: relative;
      display: inline-block;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .nav-links {
    margin-top: 48px;
    width: 100%;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin: 16px 0;
        opacity: 0;
        animation: ${fadeIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;

        &:nth-child(1) { animation-delay: 0.2s; }
        &:nth-child(2) { animation-delay: 0.25s; }
        &:nth-child(3) { animation-delay: 0.3s; }
        &:nth-child(4) { animation-delay: 0.35s; }
        &:nth-child(5) { animation-delay: 0.4s; }
        &:nth-child(6) { animation-delay: 0.45s; }
        &:nth-child(7) { animation-delay: 0.5s; }

        a {
          color: ${({ theme }) => theme.colors.textSecondary || theme.colors.slate};
          font-size: 15px;
          font-weight: 400;
          letter-spacing: -0.01em;
          text-decoration: none;
          padding: 6px 0;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          display: inline-block;

          &.active {
            color: ${({ theme }) => theme.colors.text};
            font-weight: 500;
          }

          &:hover {
            color: ${({ theme }) => theme.colors.text};
          }
        }
      }
    }

    .resume-button {
      display: block;
      width: 100%;
      margin-top: 32px;
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.primary};
      border: none;
      border-radius: ${({ theme }) => theme.borderRadiusPill || "100px"};
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.01em;
      font-family: ${({ theme }) => theme.fonts.main};
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      max-width: 100%;
      box-sizing: border-box;
      text-align: center;
      opacity: 0;
      animation: ${fadeIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards;

      &:hover,
      &:focus {
        background: ${({ theme }) => theme.colors.primaryHover || theme.colors.linkHover};
        transform: scale(1.02);
        box-shadow: 0 4px 20px ${({ theme }) => theme.colors.primary}40;
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }

  /* Hide original theme toggle; we now use floating toggle */
  .theme-toggle {
    display: none;
  }
`;

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px -100px 0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <HeaderContainer>
      <div className="logo">
        <a href="/">{personalInfo.name}</a>
      </div>
      <div className="nav-links">
        <ul>
          {navLinks.map(({ id, name, url }) => (
            <li key={id}>
              <a
                href={url}
                className={activeSection === url.substring(1) ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(url.substring(1));
                  if (element) {
                    const offsetPosition =
                      element.getBoundingClientRect().top + window.scrollY - 50;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="resume-button"
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Résumé
        </a>
      </div>
      <div className="theme-toggle">
        <ThemeToggle />
      </div>
    </HeaderContainer>
  );
};

export default Header;
