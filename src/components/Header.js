import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { navLinks, personalInfo, socialLinks } from "../data/data";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
} from "react-icons/fa";
import ThemeToggle from "./common/ThemeToggle";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;

  .logo-block {
    margin-top: 48px;
    margin-bottom: 40px;
    padding-bottom: 28px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

    .name {
      font-size: 18px;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.2;
      margin-bottom: 6px;
      opacity: 0;
      animation: ${fadeIn} 0.5s ease 0.05s forwards;

      a {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover { color: ${({ theme }) => theme.colors.primary}; }
      }
    }

    .title {
      font-size: 11px;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.textTertiary};
      letter-spacing: 0.05em;
      text-transform: uppercase;
      opacity: 0;
      animation: ${fadeIn} 0.5s ease 0.12s forwards;
    }

    .status-row {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 14px;
      opacity: 0;
      animation: ${fadeIn} 0.5s ease 0.2s forwards;

      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.green};
        flex-shrink: 0;
      }

      span {
        font-size: 10px;
        font-family: ${({ theme }) => theme.fonts.mono};
        color: ${({ theme }) => theme.colors.textTertiary};
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
    }
  }

  .nav-links {
    flex: 1;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        opacity: 0;
        animation: ${fadeIn} 0.4s ease forwards;

        &:nth-child(1) { animation-delay: 0.16s; }
        &:nth-child(2) { animation-delay: 0.19s; }
        &:nth-child(3) { animation-delay: 0.22s; }
        &:nth-child(4) { animation-delay: 0.25s; }
        &:nth-child(5) { animation-delay: 0.28s; }
        &:nth-child(6) { animation-delay: 0.31s; }
        &:nth-child(7) { animation-delay: 0.34s; }
        &:nth-child(8) { animation-delay: 0.37s; }

        a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 10px;
          border-radius: 8px;
          color: ${({ theme }) => theme.colors.textTertiary};
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: all 0.15s ease;
          position: relative;
          cursor: pointer;
          border-left: 2px solid transparent;

          .nav-label {
            transition: transform 0.15s ease;
          }

          .nav-num {
            font-family: ${({ theme }) => theme.fonts.mono};
            font-size: 9px;
            color: ${({ theme }) => theme.colors.textTertiary};
            opacity: 0;
            margin-left: auto;
            letter-spacing: 0.04em;
            transition: opacity 0.15s ease;
          }

          &.active {
            color: ${({ theme }) => theme.colors.text};
            font-weight: 600;
            background: ${({ theme }) => theme.colors.accent};
            border-left-color: ${({ theme }) => theme.colors.primary};

            .nav-num {
              opacity: 0.5;
              color: ${({ theme }) => theme.colors.primary};
            }
          }

          &:hover {
            color: ${({ theme }) => theme.colors.text};
            background: ${({ theme }) => theme.colors.accent};
            text-decoration: none;

            .nav-label { transform: translateX(2px); }
            .nav-num { opacity: 0.4; }
          }
        }
      }
    }
  }

  .bottom-block {
    padding-bottom: 8px;
    padding-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.divider};

    .resume-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      margin-bottom: 16px;
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.accent};
      border: 1px solid ${({ theme }) => theme.colors.cardBorder};
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 10px 14px;
      font-size: 12.5px;
      font-weight: 600;
      font-family: ${({ theme }) => theme.fonts.main};
      letter-spacing: -0.01em;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease;
      box-sizing: border-box;
      opacity: 0;
      animation: ${fadeIn} 0.5s ease 0.5s forwards;

      &:hover {
        background: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};
        color: #fff;
        box-shadow: 0 2px 12px ${({ theme }) => theme.colors.primary}40;
        text-decoration: none;
      }
    }

    .social-icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      opacity: 0;
      animation: ${fadeIn} 0.5s ease 0.58s forwards;

      a {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.colors.textTertiary};
        font-size: 14px;
        border-radius: 7px;
        transition: all 0.15s ease;
        text-decoration: none;

        &:hover {
          color: ${({ theme }) => theme.colors.text};
          background: ${({ theme }) => theme.colors.accent};
          text-decoration: none;
        }
      }
    }
  }
`;

const NAV_NUMS = ["01", "02", "03", "04", "05", "06", "07", "08"];

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
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const scrollTo = (e, url) => {
    e.preventDefault();
    const el = document.getElementById(url.replace("#", ""));
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer>
      <div className="logo-block">
        <div className="name">
          <a href="/">{personalInfo.name}</a>
        </div>
        <div className="title">{personalInfo.description}</div>
        <div className="status-row">
          <div className="dot" />
          <span>London, UK</span>
        </div>
      </div>

      <nav className="nav-links">
        <ul>
          {navLinks.map(({ id, name, url }, idx) => (
            <li key={id}>
              <a
                href={url}
                className={activeSection === url.replace("#", "") ? "active" : ""}
                onClick={(e) => scrollTo(e, url)}
              >
                <span className="nav-label">{name}</span>
                <span className="nav-num">{NAV_NUMS[idx]}</span>
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
              <a key={id} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
                <Icon />
              </a>
            );
          })}
          <ThemeToggle />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
