import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { experiences } from "../data/data";
import Button from "./common/Button";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const growLine = keyframes`
  from { height: 0; }
  to   { height: 100%; }
`;

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 12px;
    width: 1px;
    background: ${({ theme }) => theme.colors.timelineLine};
    height: 0;
    animation: ${({ $visible }) => $visible ? css`${growLine} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards` : "none"};
  }
`;

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 28px;
  padding-bottom: 52px;
  opacity: 0;
  will-change: transform, opacity;
  animation: ${({ $visible, $delay }) =>
    $visible ? css`${slideIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${$delay}s forwards` : "none"};

  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  .dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${({ $current, theme }) =>
      $current ? theme.colors.primary : theme.colors.backgroundTertiary};
    border: 2px solid ${({ $current, theme }) =>
      $current ? theme.colors.primary : theme.colors.divider};
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    transition: all 0.2s ease;

    ${({ $current, theme }) => $current && css`
      box-shadow: 0 0 0 4px ${theme.colors.primarySubtle};
    `}
  }
`;

const TimelineContent = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  padding: 28px 32px;
  position: relative;
  transition: all 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: ${({ theme }) => theme.shadows.card};

  &:hover {
    border-color: ${({ theme }) => theme.colors.cardBorderHover};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateX(4px);
  }

  .header-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 4px;
    flex-wrap: wrap;
  }

  .company-role {
    display: flex;
    align-items: baseline;
    gap: 10px;
    flex-wrap: wrap;

    .company {
      font-size: 18px;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.text};
      letter-spacing: -0.03em;
    }

    .sep {
      color: ${({ theme }) => theme.colors.textTertiary};
      font-weight: 300;
      font-size: 14px;
    }

    .role {
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textSecondary};
      letter-spacing: -0.01em;
    }
  }

  .date-badge {
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textTertiary};
    background: ${({ theme }) => theme.colors.accent};
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    padding: 3px 10px;
    border-radius: ${({ theme }) => theme.borderRadiusPill};
    white-space: nowrap;
    letter-spacing: 0.04em;
    flex-shrink: 0;
  }

  .meta-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    flex-wrap: wrap;

    .location {
      font-size: 11px;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.textTertiary};
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .current-badge {
      font-size: 10px;
      font-family: ${({ theme }) => theme.fonts.mono};
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.primarySubtle};
      border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
      padding: 2px 8px;
      border-radius: ${({ theme }) => theme.borderRadiusPill};
    }
  }

  .responsibilities {
    margin-bottom: 20px;
    list-style: none;

    li {
      position: relative;
      padding-left: 16px;
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 14px;
      line-height: 1.75;
      margin-bottom: 8px;
      letter-spacing: -0.006em;

      &:last-child { margin-bottom: 0; }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 5px;
        height: 1px;
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 1px;
      }
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    span {
      background: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.textTertiary};
      padding: 3px 10px;
      border-radius: 5px;
      font-size: 11px;
      font-family: ${({ theme }) => theme.fonts.mono};
      font-weight: 500;
      border: 1px solid ${({ theme }) => theme.colors.cardBorder};
      transition: all 0.15s ease;
      letter-spacing: 0.01em;
      cursor: default;

      &:hover {
        color: ${({ theme }) => theme.colors.text};
        border-color: ${({ theme }) => theme.colors.primaryBorder};
        background: ${({ theme }) => theme.colors.primarySubtle};
      }
    }
  }

  @media (max-width: 900px) {
    padding: 20px 20px;
  }
`;

const COMPANY_CURRENT = { HubSpot: true };

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
    <ExperienceSection id="experience" ref={sectionRef}>
      <SectionHeader $visible={isVisible}>
        <div className="eyebrow">
          <span className="num">03</span>
          <div className="line" />
        </div>
        <h2>Experience</h2>
        <p className="subtitle">Where I've worked and what I've shipped</p>
      </SectionHeader>

      <Timeline $visible={isVisible}>
        {experiencesToShow.map(
          ({ id, position, company, url, date, location, responsibilities, techStack }, index) => {
            const isCurrent = !!COMPANY_CURRENT[company] && index === 0;
            return (
              <TimelineItem
                key={id}
                $visible={isVisible}
                $delay={0.3 + index * 0.12}
              >
                <TimelineDot $current={isCurrent}>
                  <div className="dot" />
                </TimelineDot>

                <TimelineContent>
                  <div className="header-row">
                    <div className="company-role">
                      <a
                        className="company"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = "0.75"}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                      >
                        {company}
                      </a>
                      <span className="sep">/</span>
                      <span className="role">{position}</span>
                    </div>
                    <span className="date-badge">{date}</span>
                  </div>

                  <div className="meta-row">
                    <span className="location">{location}</span>
                    {isCurrent && <span className="current-badge">Current</span>}
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
                </TimelineContent>
              </TimelineItem>
            );
          }
        )}
      </Timeline>

      {experiences.length > 3 && (
        <Button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : `Show ${experiences.length - 3} More`}
        </Button>
      )}
    </ExperienceSection>
  );
};

export default Experience;
