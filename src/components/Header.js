import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { navLinks, personalInfo, socialLinks } from "../data/data";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
} from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;

  .logo-block {
    margin-top: 52px;
    margin-bottom: 48px;

    .name {
      font-size: 18px;
      font-weight: 700;
      letter-spacing: -0.025em;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.2;
      opacity: 0;
      animation: ${fadeIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.05s forwards;

      a {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
          text-decoration: none;
        }
      }
    }

    .title {
      font-size: 12px;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.textTertiary};
      margin-top: 4px;
      letter-spacing: 0.04em;
      opacity: 0;
      animation: ${fadeIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.12s forwards;
    }
  }

  .nav-links {
    flex: 1;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin: 2px 0;
        opacity: 0;
        animation: ${fadeIn} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;

        &:nth-child(1) { animation-delay: 0.18s; }
        &:nth-child(2) { animation-delay: 0.22s; }
        &:nth-child(3) { animation-delay: 0.26s; }
        &:nth-child(4) { animation-delay: 0.30s; }
        &:nth-child(5) { animation-delay: 0.34s; }
        &:nth-child(6) { animation-delay: 0.38s; }
        &:nth-child(7) { animation-delay: 0.42s; }
        &:nth-child(8) { animation-delay: 0.46s; }

        a {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 7px 10px;
          border-radius: 8px;
          color: ${({ theme }) => theme.colors.textTertiary};
          font-size: 13px;
          font-weight: 400;
          letter-spacing: -0.008em;
          text-decoration: none;
          transition: all 0.18s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          cursor: pointer;

          .nav-indicator {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: ${({ theme }) => theme.colors.primary};
            flex-shrink: 0;
            opacity: 0;
            transform: scale(0);
            transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .nav-label {
            transition: transform 0.18s ease;
          }

          &.active {
            color: ${({ theme }) => theme.colors.text};
            font-weight: 600;
            background: ${({ theme }) => theme.colors.greenTint};

            .nav-indicator {
              opacity: 1;
              transform: scale(1);
            }
          }

          &:hover {
            color: ${({ theme }) => theme.colors.text};
            background: ${({ theme }) => theme.colors.accent};
            text-decoration: none;

            .nav-label {
              transform: translateX(2px);
            }
          }
        }
      }
    }
  }

  .bottom-block {
    padding-bottom: 8px;

    .resume-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      margin-bottom: 24px;
      color: ${({ theme }) => theme.colors.primary};
      background: transparent;
      border: 1.5px solid ${({ theme }) => theme.colors.primary}60;
      border-radius: ${({ theme }) => theme.borderRadiusPill};
      padding: 10px 16px;
      font-size: 13px;
      font-weight: 600;
      font-family: ${({ theme }) => theme.fonts.main};
      letter-spacing: -0.01em;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      box-sizing: border-box;
      opacity: 0;
      animation: ${fadeIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.55s forwards;

      &:hover {
        background: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};
        color: #fff;
        transform: translateY(-1px);
        box-shadow: 0 4px 16px ${({ theme }) => theme.colors.primary}40;
        text-decoration: none;
      }
    }

    .social-icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      opacity: 0;
      animation: ${fadeIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.62s forwards;

      a {
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.colors.textTertiary};
        font-size: 16px;
        border-radius: 8px;
        transition: all 0.18s ease;
        text-decoration: none;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
          background: ${({ theme }) => theme.colors.greenTint};
          text-decoration: none;
        }
      }
    }
  }

  .theme-toggle {
    display: none;
  }
`;

const socialIconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  LeetCode: FaCode,
};

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollTo = (e, url) => {
    e.preventDefault();
    const id = url.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer>
      <div className="logo-block">
        <div className="name">
          <a href="/">{personalInfo.name}</a>
        </div>
        <div className="title">{personalInfo.description}</div>
      </div>

      <nav className="nav-links">
        <ul>
          {navLinks.map(({ id, name, url }) => (
            <li key={id}>
              <a
                href={url}
                className={activeSection === url.replace("#", "") ? "active" : ""}
                onClick={(e) => scrollTo(e, url)}
              >
                <span className="nav-indicator" />
                <span className="nav-label">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bottom-block">
        <a
          className="resume-button"
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Résumé
        </a>
        <div className="social-icons">
          {socialLinks.map(({ id, name, url }) => {
            const Icon = socialIconMap[name];
            if (!Icon) return null;
            return (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
