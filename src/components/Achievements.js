import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { achievements } from "../data/data";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const slideRight = keyframes`
  from { opacity: 0; transform: translateX(16px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const AchievementsSection = styled.section`
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

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const AchievementItem = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 24px 28px;
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 20px;
  align-items: flex-start;
  transition: all 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: ${({ theme }) => theme.shadows.card};
  opacity: 0;
  will-change: transform, opacity;
  animation: ${({ $visible, $delay }) =>
    $visible
      ? css`${slideRight} 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${$delay}s forwards`
      : "none"};

  &:hover {
    border-color: ${({ theme }) => theme.colors.cardBorderHover};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-2px);

    .num-badge {
      background: ${({ theme }) => theme.colors.primary};
      color: #fff;
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  .num-badge {
    width: 36px;
    height: 36px;
    border-radius: 9px;
    background: ${({ theme }) => theme.colors.primarySubtle};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 13px;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.mono};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.22s ease;
    letter-spacing: -0.02em;
    margin-top: 2px;
  }

  .content {
    .title {
      font-size: 16px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.text};
      letter-spacing: -0.02em;
      margin-bottom: 6px;
      line-height: 1.3;
    }

    .description {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 13.5px;
      line-height: 1.72;
      letter-spacing: -0.005em;
    }
  }

  @media (max-width: 600px) {
    padding: 18px 20px;
    gap: 14px;
  }
`;

const Achievements = () => {
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

  return (
    <AchievementsSection id="achievements" ref={sectionRef}>
      <SectionHeader $visible={isVisible}>
        <div className="eyebrow">
          <span className="num">05</span>
          <div className="line" />
        </div>
        <h2>Achievements</h2>
        <p className="subtitle">Moments I'm proud of</p>
      </SectionHeader>

      <AchievementsList>
        {achievements.map(({ id, title, description }, index) => (
          <AchievementItem
            key={id}
            tabIndex="0"
            $visible={isVisible}
            $delay={0.15 + index * 0.1}
          >
            <div className="num-badge">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="content">
              <div className="title">{title}</div>
              <div className="description">{description}</div>
            </div>
          </AchievementItem>
        ))}
      </AchievementsList>
    </AchievementsSection>
  );
};

export default Achievements;
