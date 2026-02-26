import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { projects } from "../data/data";
import { FaGithub } from "react-icons/fa";
import Button from "./common/Button";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.94) translateY(16px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;

const ProjectsSection = styled.section`
  max-width: 1020px;
  margin: 160px auto;
  padding: 0 32px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;

  .section-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 14px;
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 500;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    animation: ${({ $isVisible }) =>
      $isVisible ? css`${fadeInUp} 0.4s ease forwards` : "none"};

    &::before,
    &::after {
      content: '';
      flex: 1;
      max-width: 40px;
      height: 1px;
      background: ${({ theme }) => theme.colors.primary}60;
    }
  }

  h2 {
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 800;
    letter-spacing: -0.035em;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    animation: ${({ $isVisible }) =>
      $isVisible
        ? css`${fadeInUp} 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.05s forwards`
        : "none"};

    &::after {
      content: '';
      display: block;
      margin: 18px auto 0;
      width: 40px;
      height: 3px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 2px;
    }
  }

  .section-intro {
    text-align: center;
    margin-bottom: 72px;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textTertiary};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    animation: ${({ $isVisible }) =>
      $isVisible ? css`${fadeInUp} 0.4s ease 0.1s forwards` : "none"};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  border: 1px solid ${({ $featured, theme }) =>
    $featured ? `${theme.colors.primary}35` : theme.colors.cardBorder};
  padding: 28px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  box-shadow: ${({ $featured, theme }) =>
    $featured
      ? `${theme.shadows.card}, 0 0 0 1px ${theme.colors.primary}18`
      : theme.shadows.card};
  opacity: 0;
  animation: ${({ $isVisible, $delay }) =>
    $isVisible
      ? css`${scaleIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${$delay}s forwards`
      : "none"};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.primaryHover}
    );
    transform: ${({ $featured }) => ($featured ? "scaleX(1)" : "scaleX(0)")};
    transform-origin: left;
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 0 0 2px 2px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.cardBorderHover};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-5px);

    &::before {
      transform: scaleX(1);
    }

    .project-title {
      color: ${({ theme }) => theme.colors.primary};
    }

    .github-link {
      opacity: 1;
      transform: scale(1);
    }
  }

  .card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .folder-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.greenTint};
    border: 1px solid ${({ theme }) => theme.colors.primary}25;
    border-radius: 10px;

    svg {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 18px;
    }
  }

  .github-link {
    color: ${({ theme }) => theme.colors.textTertiary};
    font-size: 20px;
    transition: all 0.2s ease;
    opacity: 0.65;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      opacity: 1;
    }
  }

  .project-title {
    font-size: 17px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    line-height: 1.3;
    transition: color 0.2s ease;
  }

  .project-description {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 14px;
    line-height: 1.7;
    flex: 1;
    margin-bottom: 24px;
    letter-spacing: -0.006em;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: auto;

    span {
      background: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.primary};
      padding: 3px 10px;
      border-radius: 5px;
      font-size: 11px;
      font-family: ${({ theme }) => theme.fonts.mono};
      font-weight: 500;
      border: 1px solid ${({ theme }) => theme.colors.primary}15;
      letter-spacing: 0.02em;
      transition: all 0.18s ease;

      &:hover {
        background: ${({ theme }) => theme.colors.greenTint};
        border-color: ${({ theme }) => theme.colors.primary}40;
      }
    }
  }
`;

const ProjectBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.greenTint};
  border: 1px solid ${({ theme }) => theme.colors.primary}35;
  padding: 3px 9px;
  border-radius: ${({ theme }) => theme.borderRadiusPill};
  white-space: nowrap;
  margin-bottom: 14px;
  align-self: flex-start;

  &::before {
    content: '◆';
    font-size: 7px;
  }
`;

const FolderSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

  const projectsToShow = showMore
    ? projects
    : projects.slice(0, initialProjectsToShow);

  return (
    <ProjectsSection id="projects" ref={sectionRef} $isVisible={isVisible}>
      <div className="section-label">04</div>
      <h2>Projects</h2>
      <p className="section-intro">Things I've built and explored</p>
      <ProjectsGrid>
        {projectsToShow.map(
          ({ id, title, description, techStack, url, external, badge }, index) => (
            <ProjectCard
              key={id}
              tabIndex="0"
              $isVisible={isVisible}
              $delay={0.15 + index * 0.08}
              $featured={!!badge}
              onClick={() =>
                window.open(external || url, "_blank", "noopener,noreferrer")
              }
              onKeyPress={(e) => {
                if (e.key === "Enter")
                  window.open(external || url, "_blank", "noopener,noreferrer");
              }}
            >
              {badge && <ProjectBadge>{badge}</ProjectBadge>}
              <div className="card-top">
                <div className="folder-icon">
                  <FolderSVG />
                </div>
                {url && (
                  <a
                    className="github-link"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
              <div className="project-title">{title}</div>
              <div className="project-description">{description}</div>
              <div className="project-tech">
                {techStack.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
            </ProjectCard>
          )
        )}
      </ProjectsGrid>
      {projects.length > initialProjectsToShow && (
        <Button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : `Show ${projects.length - initialProjectsToShow} More`}
        </Button>
      )}
    </ProjectsSection>
  );
};

export default Projects;
