// src/components/Header.js

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { navLinks, personalInfo } from "../data/data";
import ThemeToggle from "./common/ThemeToggle";

const HeaderContainer = styled.header`
  width: 100%;
  /* Removed background-color as it's now set in GlobalStyle.js */
  background-color: inherit;

  .logo {
    margin-top: 50px;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;

    a {
      color: inherit;
      text-decoration: none;
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

        a {
          color: ${({ theme }) => theme.colors.text};
          font-size: ${({ theme }) => theme.fontSizes.base};
          text-decoration: none;
          padding: 5px;
          transition: ${({ theme }) => theme.transition};
          cursor: pointer;

          &.active {
            color: ${({ theme }) => theme.colors.primary};
            font-weight: bold;
          }

          &:hover {
            color: ${({ theme }) => theme.colors.primary};
            text-decoration: underline;
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
      transition: ${({ theme }) => theme.transition};
      max-width: 100%;
      box-sizing: border-box;
      word-wrap: break-word;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.greenTint};
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
