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
  /* Removed background-color as it's now set in GlobalStyle.js */
  background-color: inherit;

  .logo {
    margin-top: 50px;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    opacity: 0;
    animation: ${fadeIn} 0.6s ease 0.1s forwards;

    a {
      color: inherit;
      text-decoration: none;
      position: relative;
      display: inline-block;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .nav-links {
    margin-top: 50px;
    width: 100%;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin: 20px 0;
        opacity: 0;
        animation: ${fadeIn} 0.5s ease forwards;

        &:nth-child(1) { animation-delay: 0.2s; }
        &:nth-child(2) { animation-delay: 0.3s; }
        &:nth-child(3) { animation-delay: 0.4s; }
        &:nth-child(4) { animation-delay: 0.5s; }
        &:nth-child(5) { animation-delay: 0.6s; }
        &:nth-child(6) { animation-delay: 0.7s; }
        &:nth-child(7) { animation-delay: 0.8s; }

        a {
          color: ${({ theme }) => theme.colors.text};
          font-size: ${({ theme }) => theme.fontSizes.base};
          text-decoration: none;
          padding: 5px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          position: relative;
          display: inline-block;

          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: ${({ theme }) => theme.colors.primary};
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease;
          }

          &.active {
            color: ${({ theme }) => theme.colors.primary};
            font-weight: bold;

            &::after {
              transform: scaleX(1);
              transform-origin: left;
            }
          }

          &:hover {
            color: ${({ theme }) => theme.colors.primary};
            transform: translateX(5px);

            &::after {
              transform: scaleX(1);
              transform-origin: left;
            }
          }
        }
      }
    }

    .resume-button {
      display: block;
      width: 100%;
      margin-top: 40px;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 0.75rem 1rem;
      font-size: ${({ theme }) => theme.fontSizes.sm};
      font-family: ${({ theme }) => theme.fonts.mono};
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      max-width: 100%;
      box-sizing: border-box;
      word-wrap: break-word;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      opacity: 0;
      animation: ${fadeIn} 0.5s ease 0.9s forwards;
      position: relative;

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

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.greenTint};
        transform: translateY(-2px);
        box-shadow: 0 4px 15px ${({ theme }) => theme.colors.cardGlow};

        &::before {
          left: 100%;
        }
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
