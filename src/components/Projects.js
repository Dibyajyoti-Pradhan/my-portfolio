import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { projects } from "../data/data";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import Button from "./common/Button";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
`;

const ProjectsSection = styled.section`
  max-width: 900px;
  margin: 128px auto;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto;
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
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      letter-spacing: 0.1em;
    }

    .line {
      width: 32px;
      height: 1px;
      background: ${({ theme }) => theme.colors.primary};
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

const FeaturedProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const RegularGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 40px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  padding: 32px 28px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: ${({ theme }) => theme.shadows.card};
  display: flex;
  flex-direction: column;
  opacity: 0;
  will-change: transform, opacity;
  animation: ${({ $visible, $delay }) =>
    $visible ? css`${scaleIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${$delay}s forwards` : "none"};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 50% at 50% 0%, ${({ theme }) => theme.colors.primarySubtle} 0%, transparent 100%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}50;
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-4px);

    &::before { transform: scaleX(1); }
    &::after { opacity: 1; }
    .title { color: ${({ theme }) => theme.colors.primary}; }
    .arrow { transform: translate(2px, -2px); }
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 9px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primarySubtle};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    padding: 3px 8px;
    border-radius: ${({ theme }) => theme.borderRadiusPill};
    margin-bottom: 20px;
    align-self: flex-start;
  }

  .icon-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    .folder {
      width: 36px;
      height: 36px;
      background: ${({ theme }) => theme.colors.primarySubtle};
      border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
      border-radius: 9px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 16px;
      }
    }

    .arrow {
      color: ${({ theme }) => theme.colors.textTertiary};
      font-size: 13px;
      transition: transform 0.2s ease;
    }
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.02em;
    margin-bottom: 10px;
    line-height: 1.35;
    transition: color 0.2s ease;
  }

  .description {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 13.5px;
    line-height: 1.72;
    flex: 1;
    margin-bottom: 20px;
    letter-spacing: -0.004em;
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: auto;

    span {
      background: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.textTertiary};
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 10.5px;
      font-family: ${({ theme }) => theme.fonts.mono};
      font-weight: 500;
      border: 1px solid ${({ theme }) => theme.colors.cardBorder};
      letter-spacing: 0.01em;
    }
  }
`;

const RegularCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px 22px;
  position: relative;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: ${({ theme }) => theme.shadows.card};
  display: flex;
  flex-direction: column;
  opacity: 0;
  will-change: transform, opacity;
  animation: ${({ $visible, $delay }) =>
    $visible ? css`${scaleIn} 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${$delay}s forwards` : "none"};

  &:hover {
    border-color: ${({ theme }) => theme.colors.cardBorderHover};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-3px);

    .title { color: ${({ theme }) => theme.colors.primary}; }
    .github-icon { opacity: 1; color: ${({ theme }) => theme.colors.primary}; }
  }

  .top-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 12px;

    .folder-sm {
      width: 28px;
      height: 28px;
      background: ${({ theme }) => theme.colors.accent};
      border: 1px solid ${({ theme }) => theme.colors.cardBorder};
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${({ theme }) => theme.colors.textTertiary};
        font-size: 13px;
      }
    }

    .github-icon {
      color: ${({ theme }) => theme.colors.textTertiary};
      font-size: 16px;
      opacity: 0.5;
      transition: all 0.15s ease;
    }
  }

  .title {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.018em;
    margin-bottom: 8px;
    line-height: 1.35;
    transition: color 0.2s ease;
  }

  .description {
    color: ${({ theme }) => theme.colors.textTertiary};
    font-size: 12.5px;
    line-height: 1.68;
    flex: 1;
    margin-bottom: 14px;
    letter-spacing: -0.003em;
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: auto;

    span {
      background: transparent;
      color: ${({ theme }) => theme.colors.textTertiary};
      font-size: 10px;
      font-family: ${({ theme }) => theme.fonts.mono};
      border-right: 1px solid ${({ theme }) => theme.colors.divider};
      padding-right: 6px;
      letter-spacing: 0.01em;

      &:last-child {
        border-right: none;
        padding-right: 0;
      }
    }
  }
`;

const FolderSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [initialProjectsToShow, setInitialProjectsToShow] = useState(4);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.06 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => {
      setInitialProjectsToShow(window.innerWidth < 680 ? 2 : 4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const featured = projects.filter((p) => !!p.badge);
  const regular = projects.filter((p) => !p.badge);

  const projectsToShow = showMore ? regular : regular.slice(0, initialProjectsToShow - featured.length);

  return (
    <ProjectsSection id="projects" ref={sectionRef}>
      <SectionHeader $visible={isVisible}>
        <div className="eyebrow">
          <span className="num">03</span>
          <div className="line" />
        </div>
        <h2>Projects</h2>
        <p className="subtitle">Things I've built and explored</p>
      </SectionHeader>

      {featured.length > 0 && (
        <FeaturedProjects>
          {featured.map(({ id, title, description, techStack, url, external, badge }, index) => (
            <FeaturedCard
              key={id}
              tabIndex="0"
              $visible={isVisible}
              $delay={0.15 + index * 0.1}
              onClick={() => window.open(external || url, "_blank", "noopener,noreferrer")}
              onKeyPress={(e) => {
                if (e.key === "Enter") window.open(external || url, "_blank", "noopener,noreferrer");
              }}
            >
              <div className="badge">{badge}</div>
              <div className="icon-row">
                <div className="folder"><FolderSVG /></div>
                <FaArrowRight className="arrow" />
              </div>
              <div className="title">{title}</div>
              <div className="description">{description}</div>
              <div className="tech">
                {techStack.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
            </FeaturedCard>
          ))}
        </FeaturedProjects>
      )}

      <RegularGrid>
        {projectsToShow.map(({ id, title, description, techStack, url, external }, index) => (
          <RegularCard
            key={id}
            tabIndex="0"
            $visible={isVisible}
            $delay={0.25 + index * 0.08}
            onClick={() => window.open(external || url, "_blank", "noopener,noreferrer")}
            onKeyPress={(e) => {
              if (e.key === "Enter") window.open(external || url, "_blank", "noopener,noreferrer");
            }}
          >
            <div className="top-row">
              <div className="folder-sm"><FolderSVG /></div>
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="github-icon" />
                </a>
              )}
            </div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="tech">
              {techStack.slice(0, 4).map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
          </RegularCard>
        ))}
      </RegularGrid>

      {regular.length > (initialProjectsToShow - featured.length) && (
        <Button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : `Show ${regular.length - (initialProjectsToShow - featured.length)} More`}
        </Button>
      )}
    </ProjectsSection>
  );
};

export default Projects;
