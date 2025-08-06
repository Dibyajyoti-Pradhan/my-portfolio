// src/context/GameContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [achievements, setAchievements] = useState([]);
  const [unlockedSections, setUnlockedSections] = useState(['about']);
  const [visitedSections, setVisitedSections] = useState(new Set());
  const [gameMode, setGameMode] = useState(true);
  const [playerName, setPlayerName] = useState('Explorer');

  // Achievement definitions
  const allAchievements = [
    { id: 'explorer', name: 'Explorer', description: 'Visit your first section', points: 50 },
    { id: 'curious', name: 'Curious Mind', description: 'Visit 3 different sections', points: 100 },
    { id: 'researcher', name: 'Researcher', description: 'Visit all sections', points: 200 },
    { id: 'skilled', name: 'Skill Hunter', description: 'Explore the skills section', points: 75 },
    { id: 'experienced', name: 'Experience Seeker', description: 'Check out work experience', points: 75 },
    { id: 'creator', name: 'Project Creator', description: 'View project portfolio', points: 75 },
    { id: 'achiever', name: 'Achievement Hunter', description: 'Browse achievements section', points: 75 },
    { id: 'scholar', name: 'Scholar', description: 'Learn about education background', points: 75 },
    { id: 'networker', name: 'Networker', description: 'Visit contact section', points: 75 },
    { id: 'master', name: 'Portfolio Master', description: 'Reach level 5', points: 500 },
  ];

  // Section unlock requirements
  const sectionRequirements = {
    about: { level: 1, required: [] },
    skills: { level: 1, required: ['about'] },
    experience: { level: 2, required: ['about', 'skills'] },
    projects: { level: 2, required: ['about', 'skills'] },
    achievements: { level: 3, required: ['about', 'skills', 'experience'] },
    education: { level: 3, required: ['about', 'skills', 'experience'] },
    contact: { level: 4, required: ['about', 'skills', 'experience', 'projects'] },
  };

  // Calculate level based on score
  useEffect(() => {
    const newLevel = Math.floor(score / 200) + 1;
    if (newLevel > level) {
      setLevel(newLevel);
      // Unlock new sections based on level
      const newUnlocked = Object.keys(sectionRequirements).filter(section => {
        const req = sectionRequirements[section];
        return req.level <= newLevel && req.required.every(reqSection => visitedSections.has(reqSection));
      });
      setUnlockedSections(prev => [...new Set([...prev, ...newUnlocked])]);
    }
  }, [score, level, visitedSections, sectionRequirements]);

  const visitSection = (sectionId) => {
    if (!visitedSections.has(sectionId)) {
      setVisitedSections(prev => new Set([...prev, sectionId]));
      addScore(25); // Base points for visiting a section

      // Check for achievements
      checkAchievements(sectionId, new Set([...visitedSections, sectionId]));
    }
  };

  const addScore = (points) => {
    setScore(prev => prev + points);
  };

  const checkAchievements = (newSection, updatedVisited) => {
    allAchievements.forEach(achievement => {
      if (!achievements.find(a => a.id === achievement.id)) {
        let shouldUnlock = false;

        switch (achievement.id) {
          case 'explorer':
            shouldUnlock = updatedVisited.size >= 1;
            break;
          case 'curious':
            shouldUnlock = updatedVisited.size >= 3;
            break;
          case 'researcher':
            shouldUnlock = updatedVisited.size >= 7;
            break;
          case 'skilled':
            shouldUnlock = updatedVisited.has('skills');
            break;
          case 'experienced':
            shouldUnlock = updatedVisited.has('experience');
            break;
          case 'creator':
            shouldUnlock = updatedVisited.has('projects');
            break;
          case 'achiever':
            shouldUnlock = updatedVisited.has('achievements');
            break;
          case 'scholar':
            shouldUnlock = updatedVisited.has('education');
            break;
          case 'networker':
            shouldUnlock = updatedVisited.has('contact');
            break;
          case 'master':
            shouldUnlock = level >= 5;
            break;
          default:
            break;
        }

        if (shouldUnlock) {
          setAchievements(prev => [...prev, achievement]);
          addScore(achievement.points);
        }
      }
    });
  };

  const unlockSection = (sectionId) => {
    const req = sectionRequirements[sectionId];
    if (req && level >= req.level && req.required.every(reqSection => visitedSections.has(reqSection))) {
      setUnlockedSections(prev => [...new Set([...prev, sectionId])]);
      return true;
    }
    return false;
  };

  const isSectionUnlocked = (sectionId) => {
    return unlockedSections.includes(sectionId);
  };

  const getNextUnlockRequirement = (sectionId) => {
    const req = sectionRequirements[sectionId];
    if (!req) return null;

    const missingRequirements = req.required.filter(reqSection => !visitedSections.has(reqSection));
    const levelRequirement = req.level > level;

    return {
      missingVisits: missingRequirements,
      needsLevel: levelRequirement ? req.level : null,
      currentLevel: level
    };
  };

  const resetGame = () => {
    setScore(0);
    setLevel(1);
    setAchievements([]);
    setUnlockedSections(['about']);
    setVisitedSections(new Set());
  };

  const value = {
    score,
    level,
    achievements,
    unlockedSections,
    visitedSections: Array.from(visitedSections),
    gameMode,
    playerName,
    visitSection,
    addScore,
    unlockSection,
    isSectionUnlocked,
    getNextUnlockRequirement,
    setGameMode,
    setPlayerName,
    resetGame,
    allAchievements,
    sectionRequirements,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};
