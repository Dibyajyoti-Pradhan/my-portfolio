import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { education } from "../data/data";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import Button from "./common/Button";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const EducationSection = styled.section`
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

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EducationItem = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 32px 36px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ theme }) => theme.shadows.card};
  opacity: 0;
  animation: ${({ $isVisible, $delay }) =>
    $isVisible
      ? css`${slideIn} 0.45s cubic-bezier(0.4, 0, 0.2, 1) ${$delay}s forwards`
      : "none"};

  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 32px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 24px;
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
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 0 0 2px 2px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.cardBorderHover};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-3px);

    &::before {
      transform: scaleX(1);
    }
  }

  .duration-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    padding-top: 4px;

    .year {
      font-size: 12px;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      letter-spacing: 0.04em;
    }

    .duration-label {
      font-size: 11px;
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
      align-items: flex-start;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 6px;

      .school-name {
        font-size: 19px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
        letter-spacing: -0.022em;
        display: inline-flex;
        align-items: center;
        gap: 6px;

        svg {
          font-size: 11px;
          opacity: 0.6;
        }
      }

      .separator {
        color: ${({ theme }) => theme.colors.textTertiary};
        font-weight: 300;
        font-size: 18px;
      }

      .degree {
        font-size: 17px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
        letter-spacing: -0.02em;
      }
    }

    .meta {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 16px;
      color: ${({ theme }) => theme.colors.textTertiary};
      font-size: 13px;
      font-family: ${({ theme }) => theme.fonts.mono};

      svg {
        font-size: 11px;
        color: ${({ theme }) => theme.colors.primary}70;
      }
    }

    .major {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.textSecondary};
      font-weight: 500;
      margin-bottom: 12px;
      letter-spacing: -0.01em;
    }

    .details {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;

      .detail-pill {
        font-size: 12px;
        font-family: ${({ theme }) => theme.fonts.mono};
        color: ${({ theme }) => theme.colors.textSecondary};
        background: ${({ theme }) => theme.colors.accent};
        border: 1px solid ${({ theme }) => theme.colors.cardBorder};
        padding: 3px 10px;
        border-radius: 6px;
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
    <EducationSection id="education" ref={sectionRef} $isVisible={isVisible}>
      <div className="section-label">07</div>
      <h2>Education</h2>
      <p className="section-intro">Where it all began</p>
      <EducationList>
        {educationToShow.map(
          ({ id, school, url, degree, duration, location, major, details }, index) => (
            <EducationItem
              key={id}
              tabIndex="0"
              $isVisible={isVisible}
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
                  <span className="separator">·</span>
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
