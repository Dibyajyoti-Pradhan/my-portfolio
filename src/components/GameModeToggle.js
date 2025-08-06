// src/components/GameModeToggle.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { FaGamepad, FaUser } from 'react-icons/fa';

const ToggleContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    bottom: 10px;
    left: 10px;
  }
`;

const ToggleButton = styled(motion.button)`
  background: ${({ active, theme }) =>
    active
      ? `linear-gradient(135deg, ${theme.colors.primary} 0%, #4facfe 100%)`
      : theme.colors.headerBackground
  };
  color: ${({ active, theme }) => active ? 'white' : theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px ${({ theme }) => theme.colors.primary}44;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.9rem;
  }
`;

const WelcomeModal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.background}f5;
  backdrop-filter: blur(20px);
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  padding: 30px;
  z-index: 201;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
    font-size: 1.8rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 15px;
    line-height: 1.6;
  }

  .features {
    text-align: left;
    margin: 20px 0;

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 8px 0;
        padding-left: 20px;
        position: relative;

        &::before {
          content: '🎮';
          position: absolute;
          left: 0;
        }
      }
    }
  }

  .buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 25px;
  }
`;

const ModalButton = styled(motion.button)`
  background: ${({ primary, theme }) =>
    primary
      ? `linear-gradient(135deg, ${theme.colors.primary} 0%, #4facfe 100%)`
      : 'transparent'
  };
  color: ${({ primary, theme }) => primary ? 'white' : theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    ${({ primary }) => !primary && 'background: rgba(79, 172, 254, 0.1);'}
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 200;
  backdrop-filter: blur(5px);
`;

export default function GameModeToggle() {
  const { gameMode, setGameMode } = useGame();
  const [showWelcome, setShowWelcome] = React.useState(false);

  const handleToggleGameMode = () => {
    if (!gameMode) {
      setShowWelcome(true);
    } else {
      setGameMode(false);
    }
  };

  const handleStartGame = () => {
    setGameMode(true);
    setShowWelcome(false);
  };

  const handleCloseModal = () => {
    setShowWelcome(false);
  };

  return (
    <>
      <ToggleContainer
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ToggleButton
          active={gameMode}
          onClick={handleToggleGameMode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {gameMode ? <FaUser /> : <FaGamepad />}
          {gameMode ? 'Normal Mode' : 'Game Mode'}
        </ToggleButton>
      </ToggleContainer>

      {showWelcome && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          />
          <WelcomeModal
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <h2>🎮 Welcome to Portfolio Quest!</h2>
            <p>
              Transform your portfolio browsing into an epic adventure!
              Unlock sections, earn achievements, and level up as you explore.
            </p>

            <div className="features">
              <p><strong>Game Features:</strong></p>
              <ul>
                <li>Level-based progression system</li>
                <li>Achievement unlocking & scoring</li>
                <li>Interactive navigation quests</li>
                <li>Beautiful particle effects</li>
                <li>Immersive gaming experience</li>
              </ul>
            </div>

            <p>
              Start with the <strong>About</strong> section and unlock new areas
              as you progress through your journey!
            </p>

            <div className="buttons">
              <ModalButton
                primary
                onClick={handleStartGame}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Start Adventure
              </ModalButton>
              <ModalButton
                onClick={handleCloseModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Maybe Later
              </ModalButton>
            </div>
          </WelcomeModal>
        </>
      )}
    </>
  );
}
