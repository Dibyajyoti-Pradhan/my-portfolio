// src/components/GameNavigation.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { navLinks } from '../data/data';
import { FaLock, FaCheck, FaStar } from 'react-icons/fa';

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 15px currentColor; }
  50% { box-shadow: 0 0 25px currentColor; }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 0;
`;

const NavLevel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .level-header {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 5px;
    opacity: 0.8;
  }
`;

const NavItem = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: ${({ locked }) => locked ? 'not-allowed' : 'pointer'};

  background: ${({ unlocked, visited, theme }) => {
    if (!unlocked) return theme.colors.text + '11';
    if (visited) return `linear-gradient(135deg, ${theme.colors.primary}22 0%, ${theme.colors.primary}11 100%)`;
    return theme.colors.headerBackground;
  }};

  color: ${({ unlocked, theme }) =>
    unlocked ? theme.colors.text : theme.colors.text + '44'
  };

  border-color: ${({ unlocked, visited, theme }) => {
    if (!unlocked) return theme.colors.text + '22';
    if (visited) return theme.colors.primary + '66';
    return theme.colors.primary + '33';
  }};

  ${({ unlocked, visited }) =>
    unlocked && !visited && `
      animation: ${pulse} 2s ease-in-out infinite;
    `
  }

  ${({ visited }) =>
    visited && `
      animation: ${glow} 3s ease-in-out infinite;
    `
  }

  &:hover {
    ${({ unlocked }) => unlocked && `
      transform: translateX(5px);
      border-color: currentColor;
    `}
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${({ visited }) => visited ? '100%' : '0%'};
    background: linear-gradient(90deg, transparent 0%, ${({ theme }) => theme.colors.primary}22 50%, transparent 100%);
    transition: width 0.5s ease;
    z-index: 0;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 1;
    position: relative;
  }

  .icon {
    font-size: 1.2rem;
    ${({ visited, theme }) =>
      visited && `color: ${theme.colors.primary};`
    }
  }

  .text {
    flex: 1;
    font-size: 1rem;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    z-index: 1;
    position: relative;
  }

  .requirement {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.text}66;
    margin-top: 4px;
    font-style: italic;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.colors.text}22;
  border-radius: 2px;
  overflow: hidden;
  margin: 10px 0;

  .fill {
    height: 100%;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, #4facfe);
    width: ${({ progress }) => progress}%;
    transition: width 0.5s ease;
    border-radius: 2px;
  }
`;

const LevelInfo = styled.div`
  text-align: center;
  padding: 15px;
  background: ${({ theme }) => theme.colors.headerBackground};
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.primary}33;
  margin: 10px 0;

  .current-level {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 5px;
  }

  .next-level {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text}aa;
  }
`;

export default function GameNavigation() {
    const {
    visitedSections,
    isSectionUnlocked,
    getNextUnlockRequirement,
    visitSection,
    level,
    score
  } = useGame();

  const handleNavClick = (link, sectionId) => {
    if (isSectionUnlocked(sectionId)) {
      visitSection(sectionId);
      // Smooth scroll to section
      const element = document.querySelector(link.url);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const getSectionIcon = (sectionId, unlocked, visited) => {
    if (visited) return <FaCheck />;
    if (!unlocked) return <FaLock />;
    return <FaStar />;
  };

  const getRequirementText = (sectionId) => {
    if (isSectionUnlocked(sectionId)) return null;

    const req = getNextUnlockRequirement(sectionId);
    if (!req) return null;

    const requirements = [];
    if (req.needsLevel) {
      requirements.push(`Reach Level ${req.needsLevel}`);
    }
    if (req.missingVisits.length > 0) {
      requirements.push(`Visit: ${req.missingVisits.join(', ')}`);
    }

    return requirements.join(' • ');
  };

  // Group sections by level requirements
  const sectionsByLevel = {
    1: navLinks.filter(link => ['about', 'skills'].includes(link.name.toLowerCase())),
    2: navLinks.filter(link => ['experience', 'projects'].includes(link.name.toLowerCase())),
    3: navLinks.filter(link => ['achievements', 'education'].includes(link.name.toLowerCase())),
    4: navLinks.filter(link => ['contact'].includes(link.name.toLowerCase())),
  };

    const totalSections = navLinks.length;
  const visitedCount = visitedSections.length;
  const progress = (visitedCount / totalSections) * 100;
  const currentLevelProgress = ((score % 200) / 200) * 100;

  return (
    <NavContainer>
      <LevelInfo>
        <div className="current-level">Level {level}</div>
        <ProgressBar progress={currentLevelProgress}>
          <div className="fill" />
        </ProgressBar>
        <div className="next-level">
          {score % 200}/{200} XP to Level {level + 1}
        </div>
      </LevelInfo>

      <div style={{ marginBottom: '10px' }}>
        <div style={{ fontSize: '0.9rem', color: 'var(--primary-color)', marginBottom: '5px' }}>
          Portfolio Progress: {visitedCount}/{totalSections}
        </div>
        <ProgressBar progress={progress}>
          <div className="fill" />
        </ProgressBar>
      </div>

      {Object.entries(sectionsByLevel).map(([levelNum, links]) => (
        <NavLevel key={levelNum}>
          <div className="level-header">Level {levelNum} Areas</div>
          {links.map((link) => {
            const sectionId = link.name.toLowerCase();
            const unlocked = isSectionUnlocked(sectionId);
            const visited = visitedSections.includes(sectionId);
            const requirementText = getRequirementText(sectionId);

            return (
              <NavItem
                key={link.id}
                unlocked={unlocked}
                visited={visited}
                locked={!unlocked}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link, sectionId);
                }}
                whileHover={unlocked ? { scale: 1.02 } : {}}
                whileTap={unlocked ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * link.id }}
              >
                <div className="content">
                  <div className="icon">
                    {getSectionIcon(sectionId, unlocked, visited)}
                  </div>
                  <div>
                    <div className="text">{link.name}</div>
                    {requirementText && (
                      <div className="requirement">{requirementText}</div>
                    )}
                  </div>
                </div>
                <div className="status">
                  {visited && <span>✓</span>}
                  {unlocked && !visited && <span>📍</span>}
                  {!unlocked && <span>🔒</span>}
                </div>
              </NavItem>
            );
          })}
        </NavLevel>
      ))}
    </NavContainer>
  );
}
