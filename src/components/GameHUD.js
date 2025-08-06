// src/components/GameHUD.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { FaTrophy, FaStar, FaMedal, FaGamepad, FaUser, FaBolt } from 'react-icons/fa';

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px ${props => props.theme.colors.primary}66; }
  50% { box-shadow: 0 0 30px ${props => props.theme.colors.primary}aa; }
`;

const HUDContainer = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  pointer-events: none;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    gap: 8px;
  }
`;

const HUDCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background}ee;
  backdrop-filter: blur(10px);
  border: 2px solid ${({ theme }) => theme.colors.primary}44;
  border-radius: 15px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Courier New', monospace;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  animation: ${glow} 2s ease-in-out infinite;
  pointer-events: auto;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.colors.primary}88;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
`;

const ScoreDisplay = styled(HUDCard)`
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #333;
  border-color: #ffd700;
`;

const LevelDisplay = styled(HUDCard)`
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border-color: #4facfe;
`;

const PlayerDisplay = styled(HUDCard)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
`;

const AchievementPanel = styled(motion.div)`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 300px;
  max-height: 400px;
  background: ${({ theme }) => theme.colors.background}f5;
  backdrop-filter: blur(15px);
  border: 2px solid ${({ theme }) => theme.colors.primary}66;
  border-radius: 20px;
  padding: 20px;
  z-index: 999;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 250px;
    left: 10px;
    top: 10px;
  }
`;

const AchievementItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  margin: 8px 0;
  background: ${({ unlocked, theme }) =>
    unlocked
      ? `linear-gradient(135deg, ${theme.colors.primary}22 0%, ${theme.colors.primary}11 100%)`
      : `${theme.colors.text}11`
  };
  border: 1px solid ${({ unlocked, theme }) =>
    unlocked ? theme.colors.primary : theme.colors.text + '33'
  };
  border-radius: 10px;
  opacity: ${({ unlocked }) => unlocked ? 1 : 0.4};

  .icon {
    color: ${({ unlocked, theme }) =>
      unlocked ? theme.colors.primary : theme.colors.text + '66'
    };
    font-size: 1.2rem;
  }

  .content {
    flex: 1;

    .name {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 4px;
    }

    .description {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.text}aa;
    }

    .points {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
    }
  }
`;

const ToggleButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  pointer-events: auto;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}66;
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function GameHUD() {
  const {
    score,
    level,
    achievements,
    playerName,
    gameMode,
    allAchievements,
    setGameMode
  } = useGame();

  const [showAchievements, setShowAchievements] = useState(false);

  if (!gameMode) return null;

  return (
    <>
      <HUDContainer
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PlayerDisplay
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaUser />
          <span>{playerName}</span>
        </PlayerDisplay>

        <ScoreDisplay
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaStar />
          <span>{score.toLocaleString()}</span>
        </ScoreDisplay>

        <LevelDisplay
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaBolt />
          <span>Level {level}</span>
        </LevelDisplay>

        <ToggleButton
          onClick={() => setShowAchievements(!showAchievements)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="View Achievements"
        >
          <FaTrophy />
        </ToggleButton>

        <ToggleButton
          onClick={() => setGameMode(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Exit Game Mode"
          style={{ background: '#ff6b6b' }}
        >
          <FaGamepad />
        </ToggleButton>
      </HUDContainer>

      <AnimatePresence>
        {showAchievements && (
          <AchievementPanel
            initial={{ opacity: 0, scale: 0.8, x: -100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={() => setShowAchievements(false)}>
              ×
            </CloseButton>

            <h3 style={{ marginBottom: '20px', color: 'var(--text-color)' }}>
              🏆 Achievements ({achievements.length}/{allAchievements.length})
            </h3>

            {allAchievements.map((achievement) => {
              const unlocked = achievements.some(a => a.id === achievement.id);
              return (
                <AchievementItem
                  key={achievement.id}
                  unlocked={unlocked}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="icon">
                    <FaMedal />
                  </div>
                  <div className="content">
                    <div className="name">{achievement.name}</div>
                    <div className="description">{achievement.description}</div>
                    <div className="points">+{achievement.points} points</div>
                  </div>
                </AchievementItem>
              );
            })}
          </AchievementPanel>
        )}
      </AnimatePresence>
    </>
  );
}
