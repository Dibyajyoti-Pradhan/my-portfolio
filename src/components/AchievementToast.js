// src/components/AchievementToast.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { FaTrophy, FaStar } from 'react-icons/fa';
import Confetti from 'react-confetti';

const slideIn = keyframes`
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const celebrationGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px #ffd700; }
  50% { box-shadow: 0 0 40px #ffd700, 0 0 60px #ffd700; }
`;

const ToastContainer = styled(motion.div)`
  position: fixed;
  top: 100px;
  right: 20px;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #333;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  z-index: 9999;
  max-width: 350px;
  animation: ${slideIn} 0.5s ease-out, ${celebrationGlow} 2s ease-in-out infinite;
  border: 3px solid #ffb300;

  @media (max-width: 768px) {
    right: 10px;
    top: 80px;
    max-width: 280px;
    padding: 15px;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    .icon {
      font-size: 1.5rem;
      color: #ff6b35;
    }

    .title {
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
    }
  }

  .content {
    .achievement-name {
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 5px;
      color: #333;
    }

    .achievement-description {
      font-size: 0.9rem;
      margin-bottom: 10px;
      color: #555;
      line-height: 1.4;
    }

    .points {
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: bold;
      color: #ff6b35;

      .star {
        color: #ffd700;
      }
    }
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 1.2rem;
    color: #666;
    cursor: pointer;

    &:hover {
      color: #333;
    }
  }
`;

export default function AchievementToast() {
  const { achievements } = useGame();
  const [displayedAchievements, setDisplayedAchievements] = useState(new Set());
  const [currentToast, setCurrentToast] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Check for new achievements
    const newAchievements = achievements.filter(
      achievement => !displayedAchievements.has(achievement.id)
    );

    if (newAchievements.length > 0) {
      const latestAchievement = newAchievements[newAchievements.length - 1];
      setCurrentToast(latestAchievement);
      setShowConfetti(true);

      // Update displayed achievements
      setDisplayedAchievements(prev => {
        const newSet = new Set(prev);
        newAchievements.forEach(achievement => newSet.add(achievement.id));
        return newSet;
      });

      // Auto hide toast after 5 seconds
      const timer = setTimeout(() => {
        setCurrentToast(null);
        setShowConfetti(false);
      }, 5000);

      // Stop confetti after 3 seconds
      const confettiTimer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
        clearTimeout(confettiTimer);
      };
    }
  }, [achievements, displayedAchievements]);

  const handleClose = () => {
    setCurrentToast(null);
    setShowConfetti(false);
  };

  return (
    <>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
          colors={['#ffd700', '#ff6b35', '#4facfe', '#667eea', '#f093fb']}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 9998 }}
        />
      )}

      <AnimatePresence>
        {currentToast && (
          <ToastContainer
            initial={{ x: 400, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 400, opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <button className="close-btn" onClick={handleClose}>
              ×
            </button>

            <div className="header">
              <div className="icon">
                <FaTrophy />
              </div>
              <div className="title">Achievement Unlocked!</div>
            </div>

            <div className="content">
              <div className="achievement-name">{currentToast.name}</div>
              <div className="achievement-description">{currentToast.description}</div>
              <div className="points">
                <FaStar className="star" />
                <span>+{currentToast.points} points earned!</span>
              </div>
            </div>
          </ToastContainer>
        )}
      </AnimatePresence>
    </>
  );
}
