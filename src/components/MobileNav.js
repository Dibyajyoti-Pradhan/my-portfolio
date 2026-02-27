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
  animation: ${slideInRight} 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  overflow-y: auto;
`;

const NavList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  text-decoration: none;
  transition: padding-left 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  .name {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.15s ease;
    line-height: 1;
  }

  .arrow {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textTertiary};
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), color 0.15s ease;
    opacity: 0;
  }

  &:hover {
    padding-left: 10px;

    .name { color: ${({ theme }) => theme.colors.primary}; }
    .arrow { transform: translateX(4px); color: ${({ theme }) => theme.colors.primary}; opacity: 1; }
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
            <NavList>
              {navLinks.map(({ id, name, url }, idx) => (
                <NavItem key={id} $i={idx}>
                  <NavLink href={url} onClick={(e) => handleNavClick(e, url)}>
                    <span className="name">{name}</span>
                    <span className="arrow">›</span>
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
