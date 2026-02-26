import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { achievements } from "../data/data";
import Button from "./common/Button";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const AchievementsSection = styled.section`
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

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AchievementItem = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 28px 32px;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ theme }) => theme.shadows.card};
  opacity: 0;
  animation: ${({ $isVisible, $delay }) =>
    $isVisible
      ? css`${slideInRight} 0.45s cubic-bezier(0.4, 0, 0.2, 1) ${$delay}s forwards`
      : "none"};

  &:hover {
    border-color: ${({ theme }) => theme.colors.cardBorderHover};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-3px);

    .achievement-number {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
    }
  }

  .achievement-number {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.greenTint};
    border: 1px solid ${({ theme }) => theme.colors.primary}30;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    font-weight: 800;
    font-family: ${({ theme }) => theme.fonts.mono};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.28s ease;
    letter-spacing: -0.02em;
  }

  .achievement-content {
    flex: 1;

    .achievement-title {
      font-size: 18px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.text};
      letter-spacing: -0.022em;
      margin-bottom: 8px;
      line-height: 1.3;
    }

    .achievement-description {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 14px;
      line-height: 1.72;
      letter-spacing: -0.006em;
    }
  }

  @media (max-width: 600px) {
    padding: 20px;
    gap: 16px;
  }
`;

const Achievements = () => {
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

  const achievementsToShow = showMore ? achievements : achievements.slice(0, 2);

  return (
    <AchievementsSection id="achievements" ref={sectionRef} $isVisible={isVisible}>
      <div className="section-label">05</div>
      <h2>Achievements</h2>
      <p className="section-intro">Moments I'm proud of</p>
      <AchievementsList>
        {achievementsToShow.map(({ id, title, description }, index) => (
          <AchievementItem
            key={id}
            tabIndex="0"
            $isVisible={isVisible}
            $delay={0.15 + index * 0.1}
          >
            <div className="achievement-number">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="achievement-content">
              <div className="achievement-title">{title}</div>
              <div className="achievement-description">{description}</div>
            </div>
          </AchievementItem>
        ))}
      </AchievementsList>
      {achievements.length > 2 && (
        <Button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : `Show ${achievements.length - 2} More`}
        </Button>
      )}
    </AchievementsSection>
  );
};

export default Achievements;
