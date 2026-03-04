import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { education } from "../data/data";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import Button from "./common/Button";
import { fadeInUp } from "../styles/animations";

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const EducationSection = styled.section`
  max-width: 900px;
  margin: 128px auto;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 56px;
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
      color: ${({ theme }) => theme.colors.textTertiary};
      font-weight: 600;
      letter-spacing: 0.1em;
    }

    .line {
      width: 32px;
      height: 1px;
      background: ${({ theme }) => theme.colors.divider};
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

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EducationItem = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 28px 32px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: ${({ theme }) => theme.shadows.card};
  opacity: 0;
  will-change: transform, opacity;
  animation: ${({ $visible, $delay }) =>
    $visible
      ? css`${slideIn} 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${$delay}s forwards`
      : "none"};

  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 28px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 20px 20px;
  }

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
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.cardBorderHover};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-2px);

    &::before {
      transform: scaleX(1);
    }
  }

  .duration-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
    padding-top: 3px;

    .year {
      font-size: 13px;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      letter-spacing: -0.01em;
    }

    .duration-label {
      font-size: 10px;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.textTertiary};
      letter-spacing: 0.04em;
    }

    @media (max-width: 680px) {
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }
  }

  .content-col {
    .school-row {
      display: flex;
      align-items: baseline;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 5px;

      .school-name {
        font-size: 17px;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.text};
        letter-spacing: -0.025em;
        display: inline-flex;
        align-items: center;
        gap: 5px;

        svg {
          font-size: 10px;
          opacity: 0.4;
          color: ${({ theme }) => theme.colors.textTertiary};
        }
      }

      .sep {
        color: ${({ theme }) => theme.colors.textTertiary};
        font-weight: 300;
        font-size: 15px;
      }

      .degree {
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.textSecondary};
        letter-spacing: -0.012em;
      }
    }

    .meta {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 14px;
      color: ${({ theme }) => theme.colors.textTertiary};
      font-size: 11px;
      font-family: ${({ theme }) => theme.fonts.mono};
      letter-spacing: 0.04em;
      text-transform: uppercase;

      svg {
        font-size: 9px;
        color: ${({ theme }) => theme.colors.textTertiary};
      }
    }

    .major {
      font-size: 13px;
      color: ${({ theme }) => theme.colors.textSecondary};
      font-weight: 500;
      margin-bottom: 12px;
      letter-spacing: -0.008em;
    }

    .details {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;

      .detail-pill {
        font-size: 11px;
        font-family: ${({ theme }) => theme.fonts.mono};
        color: ${({ theme }) => theme.colors.textTertiary};
        background: ${({ theme }) => theme.colors.accent};
        border: 1px solid ${({ theme }) => theme.colors.cardBorder};
        padding: 2px 9px;
        border-radius: 5px;
        letter-spacing: 0.01em;
      }
    }
  }
`;

const Education = () => {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const educationToShow = showMore ? education : education.slice(0, 1);

  return (
    <EducationSection id="education" ref={sectionRef}>
      <SectionHeader $visible={isVisible}>
        <div className="eyebrow">
          <span className="num">07</span>
          <div className="line" />
        </div>
        <h2>Education</h2>
        <p className="subtitle">Where it all began</p>
      </SectionHeader>

      <EducationList>
        {educationToShow.map(
          ({ id, school, url, degree, duration, location, major, details }, index) => (
            <EducationItem
              key={id}
              tabIndex="0"
              $visible={isVisible}
              $delay={0.15 + index * 0.1}
              onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
              onKeyPress={(e) => {
                if (e.key === "Enter")
                  window.open(url, "_blank", "noopener,noreferrer");
              }}
            >
              <div className="duration-col">
                <span className="year">{duration.split(" - ")[0]}</span>
                <span className="duration-label">{duration}</span>
              </div>
              <div className="content-col">
                <div className="school-row">
                  <span className="school-name">
                    {school}
                    <FaExternalLinkAlt />
                  </span>
                  <span className="sep">·</span>
                  <span className="degree">{degree}</span>
                </div>
                <div className="meta">
                  <FaMapMarkerAlt />
                  {location}
                </div>
                {major && <div className="major">{major}</div>}
                <div className="details">
                  {details.map((detail, idx) => (
                    <span key={idx} className="detail-pill">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </EducationItem>
          )
        )}
      </EducationList>

      {education.length > 1 && (
        <Button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : `Show ${education.length - 1} More`}
        </Button>
      )}
    </EducationSection>
  );
};

export default Education;
