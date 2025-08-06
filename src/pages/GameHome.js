// src/pages/GameHome.js
import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Education from "../components/Education";
import Contact from "../components/Contact";
import AnimatedSection from "../components/AnimatedSection";
import Header from "../components/Header";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useGame } from "../context/GameContext";

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const MobileHeader = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 20px;
  }
`;

const WelcomeSection = styled(motion.div)`
  text-align: center;
  padding: 60px 20px;
  background: ${({ theme }) => theme.colors.headerBackground};
  border-radius: 20px;
  margin-bottom: 40px;
  border: 2px solid ${({ theme }) => theme.colors.primary}33;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}11 0%, transparent 50%, ${({ theme }) => theme.colors.primary}11 100%);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: 3rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, #4facfe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .subtitle {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 15px;
    opacity: 0.9;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .description {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text}cc;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const GameStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin: 30px 0;

  .stat-card {
    background: ${({ theme }) => theme.colors.background}88;
    border: 2px solid ${({ theme }) => theme.colors.primary}44;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    backdrop-filter: blur(10px);

    .number {
      font-size: 2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 5px;
    }

    .label {
      color: ${({ theme }) => theme.colors.text}aa;
      font-size: 0.9rem;
    }
  }
`;

const ProgressIndicator = styled(motion.div)`
  background: ${({ theme }) => theme.colors.headerBackground};
  border-radius: 15px;
  padding: 20px;
  margin: 30px 0;
  border: 2px solid ${({ theme }) => theme.colors.primary}33;

  .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 15px;
    text-align: center;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: ${({ theme }) => theme.colors.text}22;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 10px;

    .fill {
      height: 100%;
      background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, #4facfe);
      border-radius: 4px;
      transition: width 0.5s ease;
    }
  }

  .stats {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text}aa;
  }
`;

export default function GameHome() {
  const {
    gameMode,
    score,
    level,
    visitedSections,
    achievements
  } = useGame();

  const totalSections = 7;
  const progress = (visitedSections.length / totalSections) * 100;

  return (
    <HomeContainer>
      <MobileHeader>
        <Header />
      </MobileHeader>

      {gameMode && (
        <>
          <WelcomeSection>
            <h1>🎮 Portfolio Quest</h1>
            <div className="subtitle">Embark on an Epic Journey Through My Professional Story</div>
            <div className="description">
              Navigate through different levels of my portfolio, unlock achievements,
              and discover my skills, experience, and projects in an interactive gaming experience!
            </div>

            <GameStats
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="stat-card">
                <div className="number">{level}</div>
                <div className="label">Current Level</div>
              </div>
              <div className="stat-card">
                <div className="number">{score.toLocaleString()}</div>
                <div className="label">Total Score</div>
              </div>
              <div className="stat-card">
                <div className="number">{visitedSections.length}</div>
                <div className="label">Sections Visited</div>
              </div>
              <div className="stat-card">
                <div className="number">{achievements.length}</div>
                <div className="label">Achievements</div>
              </div>
            </GameStats>
          </WelcomeSection>

          <ProgressIndicator>
            <div className="title">🗺️ Exploration Progress</div>
            <div className="progress-bar">
              <div
                className="fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="stats">
              <span>Sections Completed: {visitedSections.length}/{totalSections}</span>
              <span>{progress.toFixed(1)}% Complete</span>
            </div>
          </ProgressIndicator>
        </>
      )}

      <AnimatedSection id="about" delay={0.1}>
        <About />
      </AnimatedSection>

      <AnimatedSection id="skills" delay={0.2}>
        <Skills />
      </AnimatedSection>

      <AnimatedSection id="experience" delay={0.3}>
        <Experience />
      </AnimatedSection>

      <AnimatedSection id="projects" delay={0.4}>
        <Projects />
      </AnimatedSection>

      <AnimatedSection id="achievements" delay={0.5}>
        <Achievements />
      </AnimatedSection>

      <AnimatedSection id="education" delay={0.6}>
        <Education />
      </AnimatedSection>

      <AnimatedSection id="contact" delay={0.7}>
        <Contact />
      </AnimatedSection>
    </HomeContainer>
  );
}
