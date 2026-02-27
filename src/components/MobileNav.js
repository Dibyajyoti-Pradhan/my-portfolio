import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { navLinks, personalInfo, socialLinks } from "../data/data";
import ThemeToggle from "./common/ThemeToggle";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
} from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideInRight = keyframes`
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
`;

const itemReveal = keyframes`
  from { opacity: 0; transform: translateX(16px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const TopBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: ${({ theme }) => theme.colors.headerBackground};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
`;

const Logo = styled.a`
  font-size: 15px;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const HamburgerBtn = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.15s ease;
  padding: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }

  .bar {
    width: 18px;
    height: 1.5px;
    background: ${({ theme }) => theme.colors.text};
    border-radius: 1px;
    transform-origin: center;
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
                opacity 0.3s ease,
                width 0.3s ease;
  }

  ${({ $open }) =>
    $open &&
    css`
      .bar:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
      .bar:nth-child(2) { opacity: 0; width: 0; }
      .bar:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
    `}
`;

const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 998;
  animation: ${fadeIn} 0.25s ease forwards;
`;

const Drawer = styled.nav`
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  width: min(320px, 88vw);
  background: ${({ theme }) => theme.colors.background};
  border-left: 1px solid ${({ theme }) => theme.colors.divider};
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 40px 32px 48px;
  font-family: ${({ theme }) => theme.fonts.main};
  animation: ${slideInRight} 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  overflow-y: auto;
`;

const NavList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const NavItem = styled.li`
  opacity: 0;
  animation: ${itemReveal} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: ${({ $i }) => 0.06 + $i * 0.045}s;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 13.5px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.main};
  letter-spacing: -0.01em;
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: all 0.15s ease;

  .nav-label {
    flex: 1;
    transition: transform 0.15s ease;
  }

  .nav-num {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 9px;
    color: ${({ theme }) => theme.colors.textTertiary};
    opacity: 0;
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
`;

const DrawerFooter = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  animation: ${fadeIn} 0.4s ease 0.45s forwards;
`;

const ResumeBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 0;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: ${({ theme }) => theme.borderRadiusPill};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-1px);
    color: #fff;
    text-decoration: none;
  }
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  transition: all 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primaryBorder};
  }
`;

const DrawerIdentity = styled.div`
  padding-bottom: 24px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

  .id-name {
    font-size: 17px;
    font-weight: 800;
    font-family: ${({ theme }) => theme.fonts.main};
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 5px;
    line-height: 1.2;
  }

  .id-title {
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textTertiary};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .id-location {
    display: inline-flex;
    align-items: center;
    gap: 6px;

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
`;

const NAV_NUMS = ["01", "02", "03", "04", "05", "06", "07", "08"];

const socialIconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  LeetCode: FaCode,
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNavClick = (e, url) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(url.replace("#", ""));
      if (el) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
      }
    }, 280);
  };

  return (
    <>
      <TopBar>
        <Logo href="/">
          {personalInfo.name.split(" ")[0]}
          <span>.</span>
        </Logo>
        <RightControls>
          <ThemeToggle />
          <HamburgerBtn
            $open={open}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </HamburgerBtn>
        </RightControls>
      </TopBar>

      {open && (
        <>
          <DrawerOverlay onClick={() => setOpen(false)} />
          <Drawer>
            <DrawerIdentity>
              <div className="id-name">{personalInfo.name}</div>
              <div className="id-title">{personalInfo.description}</div>
              <div className="id-location">
                <span className="dot" />
                <span>London, UK</span>
              </div>
            </DrawerIdentity>
            <NavList>
              {navLinks.map(({ id, name, url }, idx) => (
                <NavItem key={id} $i={idx}>
                  <NavLink href={url} onClick={(e) => handleNavClick(e, url)}>
                    <span className="nav-label">{name}</span>
                    <span className="nav-num">{NAV_NUMS[idx]}</span>
                  </NavLink>
                </NavItem>
              ))}
            </NavList>

            <DrawerFooter>
              <ResumeBtn
                href={`${process.env.PUBLIC_URL}/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Download Résumé
              </ResumeBtn>
              <SocialRow>
                {socialLinks.map(({ id, name, url }) => {
                  const Icon = socialIconMap[name];
                  if (!Icon) return null;
                  return (
                    <SocialIcon
                      key={id}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                    >
                      <Icon />
                    </SocialIcon>
                  );
                })}
              </SocialRow>
            </DrawerFooter>
          </Drawer>
        </>
      )}
    </>
  );
};

export default MobileNav;
