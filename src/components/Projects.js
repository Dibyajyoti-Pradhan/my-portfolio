// src/components/Projects.js

import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { projects } from "../data/data";
import { FaGithub } from "react-icons/fa";
import Card from "./common/Card";
import Button from "./common/Button";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ProjectsSection = styled.section`
  max-width: 1000px;
  margin: 140px auto;
  padding: 0 24px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  h2 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-bottom: 64px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    animation: ${({ $isVisible }) =>
      $isVisible
        ? css`${fadeInUp} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards`
        : "none"};

    @media (max-width: 768px) {
      font-size: 36px;
      margin-bottom: 48px;
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 50px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
  }
`;

const ProjectCard = styled(Card)`
  padding: 20px;
  opacity: 0;
  animation: ${({ $isVisible, $delay }) =>
    $isVisible
      ? css`${scaleIn} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${$delay}s forwards`
      : "none"};

  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .project-title-row {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
    }
    .project-links {
      a {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 20px;
        transition: all 0.3s ease;
        display: inline-block;

        &:hover,
        &:focus {
          color: ${({ theme }) => theme.colors.text};
          transform: scale(1.2) rotate(360deg);
          box-shadow: 0 15px 40px ${({ theme }) => theme.colors.greenTint};
        }
      }
    }
  }

  .project-title {
    margin-left: 20px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s ease;
  }

  &:hover .project-title {
    color: ${({ theme }) => theme.colors.primary};
  }

  .project-description {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    span {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.text};
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 14px;
      font-family: ${({ theme }) => theme.fonts.mono};
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      outline: none;
      border: 1px solid transparent;

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.greenTint};
        border-color: ${({ theme }) => theme.colors.primary};
        transform: translateY(-3px);
        box-shadow: 0 4px 12px ${({ theme }) => theme.colors.cardGlow};
      }
    }
  }
`;

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [initialProjectsToShow, setInitialProjectsToShow] = useState(4);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProjectsToShow = () => {
      if (window.innerWidth < 768) {
        setInitialProjectsToShow(2);
      } else {
        setInitialProjectsToShow(4);
      }
    };

    updateProjectsToShow();
    window.addEventListener("resize", updateProjectsToShow);
    return () => window.removeEventListener("resize", updateProjectsToShow);
  }, []);

  const projectsToShow = showMore
    ? projects
    : projects.slice(0, initialProjectsToShow);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <ProjectsSection id="projects" ref={sectionRef} $isVisible={isVisible}>
      <h2>Personal Projects</h2>
      <ProjectsGrid>
        {projectsToShow.map(
          ({ id, title, description, techStack, url, external }, index) => (
            <ProjectCard
              key={id}
              tabIndex="0"
              $isVisible={isVisible}
              $delay={0.2 + index * 0.1}
              onClick={() => {
                window.open(external || url, "_blank", "noopener,noreferrer");
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  window.open(external || url, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <div className="project-top">
                <div className="project-title-row">
                  <div className="project-links">
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Link"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                  <div className="project-title">{title}</div>
                </div>
              </div>
              <div className="project-description">{description}</div>
              <div className="project-tech">
                {techStack.map((tech, idx) => (
                  <span key={idx} tabIndex="0">
                    {tech}
                  </span>
                ))}
              </div>
            </ProjectCard>
          )
        )}
      </ProjectsGrid>
      {projects.length > initialProjectsToShow && (
        <Button onClick={handleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
      )}
    </ProjectsSection>
  );
};

export default Projects;
