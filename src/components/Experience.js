import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { experiences } from "../data/data";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import Button from "./common/Button";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-24px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const ExperienceSection = styled.section`
  max-width: 900px;
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

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ExperienceItem = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 32px 36px;
  position: relative;
  overflow: hidden;
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
  opacity: 0;
  box-shadow: ${({ theme }) => theme.shadows.card};
  animation: ${({ $isVisible, $delay }) =>
    $isVisible
      ? css`${slideInLeft} 0.45s cubic-bezier(0.4, 0, 0.2, 1) ${$delay}s forwards`
      : "none"};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 0 2px 2px 0;
    transform: scaleY(0);
    transform-origin: center;
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.cardBorderHover};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateX(4px);

    &::before {
      transform: scaleY(1);
    }
  }

  @media (max-width: 768px) {
    padding: 24px;
  }

  .exp-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 8px;
    flex-wrap: wrap;

    .company-role {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;

      .company {
        font-size: 20px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
        letter-spacing: -0.02em;

        a {
          color: inherit;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;

          svg {
            font-size: 11px;
            opacity: 0.6;
            transition: opacity 0.2s;
          }

          &:hover svg {
            opacity: 1;
          }
        }
      }

      .separator {
        color: ${({ theme }) => theme.colors.textTertiary};
        font-weight: 300;
      }

      .role {
        font-size: 17px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
        letter-spacing: -0.02em;
      }
    }

    .date-badge {
      font-size: 11px;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.textTertiary};
      background: ${({ theme }) => theme.colors.accent};
      border: 1px solid ${({ theme }) => theme.colors.cardBorder};
      padding: 4px 12px;
      border-radius: ${({ theme }) => theme.borderRadiusPill};
      white-space: nowrap;
      letter-spacing: 0.04em;
      flex-shrink: 0;
    }
  }

  .meta-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;

    .location {
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${({ theme }) => theme.colors.textTertiary};
      font-size: 13px;
      font-family: ${({ theme }) => theme.fonts.mono};

      svg {
        font-size: 11px;
        color: ${({ theme }) => theme.colors.primary}80;
      }
    }
  }

  .responsibilities {
    margin-bottom: 24px;

    li {
      position: relative;
      padding-left: 18px;
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 15px;
      line-height: 1.72;
      margin-bottom: 10px;
      letter-spacing: -0.008em;

      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        content: '▸';
        position: absolute;
        left: 0;
        top: 0;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 12px;
        line-height: 1.72;
      }
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    span {
      background: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.primary};
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-family: ${({ theme }) => theme.fonts.mono};
      font-weight: 500;
      border: 1px solid ${({ theme }) => theme.colors.primary}18;
      transition: all 0.2s ease;
      cursor: default;
      letter-spacing: 0.01em;

      &:hover {
        background: ${({ theme }) => theme.colors.greenTint};
        border-color: ${({ theme }) => theme.colors.primary}45;
        transform: translateY(-1px);
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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.06 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experiencesToShow = showAll ? experiences : experiences.slice(0, 3);

  return (
    <ExperienceSection id="experience" ref={sectionRef} $isVisible={isVisible}>
      <div className="section-label">03</div>
      <h2>Experience</h2>
      <p className="section-intro">Where I've worked and what I've built</p>
      <ExperienceList>
        {experiencesToShow.map(
          ({ id, position, company, url, date, location, responsibilities, techStack }, index) => (
            <ExperienceItem
              key={id}
              $isVisible={isVisible}
              $delay={0.15 + index * 0.1}
            >
              <div className="exp-header">
                <div className="company-role">
                  <span className="company">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {company}
                      <FaExternalLinkAlt />
                    </a>
                  </span>
                  <span className="separator">·</span>
                  <span className="role">{position}</span>
                </div>
                <span className="date-badge">{date}</span>
              </div>

              <div className="meta-row">
                <span className="location">
                  <FaMapMarkerAlt />
                  {location}
                </span>
              </div>

              <ul className="responsibilities">
                {responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="tech-stack">
                {techStack.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
            </ExperienceItem>
          )
        )}
      </ExperienceList>
      {experiences.length > 3 && (
        <Button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : `Show ${experiences.length - 3} More`}
        </Button>
      )}
    </ExperienceSection>
  );
};

export default Experience;
