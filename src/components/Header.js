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
    margin-bottom: 44px;
    padding-bottom: 28px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

    .name {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.2;
      opacity: 0;
      animation: ${fadeIn} 0.5s ease 0.05s forwards;

      a {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    .title {
      font-size: 11px;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.textTertiary};
      margin-top: 5px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      opacity: 0;
      animation: ${fadeIn} 0.5s ease 0.12s forwards;
    }

    .status-dot {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 12px;
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

    .nav-section-label {
      font-size: 9px;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.textTertiary};
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 10px;
      padding: 0 8px;
      opacity: 0;
      animation: ${fadeIn} 0.4s ease 0.16s forwards;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin: 1px 0;
        opacity: 0;
        animation: ${fadeIn} 0.4s ease forwards;

        &:nth-child(1) { animation-delay: 0.18s; }
        &:nth-child(2) { animation-delay: 0.21s; }
        &:nth-child(3) { animation-delay: 0.24s; }
        &:nth-child(4) { animation-delay: 0.27s; }
        &:nth-child(5) { animation-delay: 0.30s; }
        &:nth-child(6) { animation-delay: 0.33s; }
        &:nth-child(7) { animation-delay: 0.36s; }
        &:nth-child(8) { animation-delay: 0.39s; }

        a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 8px;
          border-radius: 7px;
          color: ${({ theme }) => theme.colors.textTertiary};
          font-size: 12.5px;
          font-weight: 400;
          letter-spacing: -0.006em;
          text-decoration: none;
          transition: all 0.15s ease;
          position: relative;
          cursor: pointer;

          .nav-indicator {
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background: ${({ theme }) => theme.colors.primary};
            flex-shrink: 0;
            opacity: 0;
            transform: scale(0);
            transition: all 0.18s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

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

            .nav-indicator {
              opacity: 1;
              transform: scale(1);
            }

            .nav-num {
              opacity: 0.5;
              color: ${({ theme }) => theme.colors.primary};
            }
          }

          &:hover {
            color: ${({ theme }) => theme.colors.text};
            background: ${({ theme }) => theme.colors.accent};
            text-decoration: none;

            .nav-label {
              transform: translateX(1px);
            }

            .nav-num {
              opacity: 0.4;
            }
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
      margin-bottom: 18px;
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.accent};
      border: 1px solid ${({ theme }) => theme.colors.cardBorder};
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 9px 14px;
      font-size: 12px;
      font-weight: 600;
      font-family: ${({ theme }) => theme.fonts.main};
      letter-spacing: -0.01em;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      box-sizing: border-box;
      opacity: 0;
      animation: ${fadeIn} 0.5s ease 0.5s forwards;

      &:hover {
        background: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};
        color: #fff;
        transform: none;
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
        <div className="status-dot">
          <div className="dot" />
          <span>London, UK</span>
        </div>
      </div>

      <nav className="nav-links">
        <div className="nav-section-label">Navigation</div>
        <ul>
          {navLinks.map(({ id, name, url }, idx) => (
            <li key={id}>
              <a
                href={url}
                className={activeSection === url.replace("#", "") ? "active" : ""}
                onClick={(e) => scrollTo(e, url)}
              >
                <span className="nav-indicator" />
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
          <ThemeToggle />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
