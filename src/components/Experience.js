// src/components/Experience.js

import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { experiences } from "../data/data";
import { FaMapMarkerAlt } from "react-icons/fa";
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

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ExperienceSection = styled.section`
  max-width: 900px;
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

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0;
`;

const ExperienceItem = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.borderRadiusLarge || "20px"};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder || "rgba(255, 255, 255, 0.1)"};
  padding: 32px;
  position: relative;
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 32px;
  outline: none;
  cursor: pointer;
  opacity: 0;
  animation: ${({ $isVisible, $delay }) =>
    $isVisible
      ? css`${fadeInRight} 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${$delay}s forwards`
      : "none"};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  &:hover,
  &:focus {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    border-color: ${({ theme }) => theme.colors.primary}30;
  }

  .left-column {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.slate};
    text-transform: uppercase;
    font-weight: bold;
  }

  .right-column {
    .title-company {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;

      .job-title {
        font-size: 22px;
        color: ${({ theme }) => theme.colors.slate};
        font-weight: bold;
      }

      .company {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.primary};
        display: flex;
        align-items: center;

        a {
          color: inherit;
          text-decoration: none;

          &:hover,
          &:focus {
            text-decoration: underline;
          }
        }
      }
    }

    .location {
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${({ theme }) => theme.colors.slate};
      font-size: 16px;
      margin-bottom: 10px;

      svg {
        font-size: 18px;
      }
    }

    .responsibilities {
      color: ${({ theme }) => theme.colors.slate};
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 20px;

      p {
        margin-bottom: 10px;
        max-width: 800px;
      }
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 10px; /* Adjusted gap to match Projects.js */

      span {
        background-color: ${({ theme }) =>
          theme.colors.accent}; /* Updated background color */
        color: ${({ theme }) => theme.colors.slate};
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 14px;
        font-family: ${({ theme }) => theme.fonts.mono};
        transition: background-color 0.3s ease, transform 0.3s ease;
        outline: none;
        tabindex: 0;

        &:hover,
        &:focus {
          background-color: ${({ theme }) => theme.colors.greenTint};
          transform: translateY(-3px);
        }
      }
    }
  }
`;

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
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

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const experiencesToShow = showAll ? experiences : experiences.slice(0, 3);

  return (
    <ExperienceSection id="experience" ref={sectionRef} $isVisible={isVisible}>
      <h2>Work Experience</h2>
      <ExperienceList>
        {experiencesToShow.map(
          ({
            id,
            position,
            company,
            url,
            date,
            location,
            responsibilities,
            techStack,
          }, index) => (
            <ExperienceItem key={id} tabIndex="0" $isVisible={isVisible} $delay={0.2 + index * 0.15}>
              <div className="left-column">{date}</div>
              <div className="right-column">
                <div className="title-company">
                  <div
                    className="company"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex="0"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          window.open(url, "_blank", "noopener,noreferrer");
                        }
                      }}
                    >
                      {company}
                    </a>
                  </div>
                  <div className="job-title">{position}</div>
                </div>
                <div className="location">
                  <FaMapMarkerAlt />
                  <span>{location}</span>
                </div>
                <div className="responsibilities">
                  {responsibilities.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
                <div className="tech-stack">
                  {techStack.map((tech, idx) => (
                    <span key={idx} tabIndex="0">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ExperienceItem>
          )
        )}
      </ExperienceList>
      {experiences.length > 3 && (
        <Button onClick={handleShowMore}>
          {showAll ? "Show Less" : "Show More"}
        </Button>
      )}
    </ExperienceSection>
  );
};

export default Experience;
