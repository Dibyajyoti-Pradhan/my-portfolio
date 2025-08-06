// src/components/AnimatedSection.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import { useGame } from '../context/GameContext';

const SectionContainer = styled(motion.section)`
  position: relative;
  margin: 40px 0;
  padding: 20px;
  border-radius: 20px;
  background: ${({ theme, unlocked }) =>
    unlocked
      ? theme.colors.headerBackground
      : `${theme.colors.text}11`
  };
  border: 2px solid ${({ theme, unlocked, visited }) => {
    if (!unlocked) return `${theme.colors.text}22`;
    if (visited) return `${theme.colors.primary}66`;
    return `${theme.colors.primary}33`;
  }};
  backdrop-filter: blur(10px);
  transition: all 0.5s ease;
  overflow: hidden;

  ${({ unlocked }) => !unlocked && `
    filter: grayscale(0.7) blur(1px);
    pointer-events: none;
    user-select: none;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ visited, theme }) =>
      visited
        ? `linear-gradient(135deg, ${theme.colors.primary}11 0%, transparent 50%, ${theme.colors.primary}11 100%)`
        : 'transparent'
    };
    z-index: 0;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const LockedOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background}dd;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  .lock-icon {
    font-size: 3rem;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.text}66;
  }

  .unlock-text {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .requirements {
    font-size: 0.9rem;
    opacity: 0.8;
    max-width: 300px;
  }
`;

const UnlockEffect = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}44 0%, transparent 50%, ${({ theme }) => theme.colors.primary}44 100%);
  z-index: 5;
  pointer-events: none;
`;

const VisitEffect = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  z-index: 5;
  pointer-events: none;
`;

export default function AnimatedSection({
  id,
  children,
  className,
  delay = 0
}) {
  const {
    isSectionUnlocked,
    visitSection,
    getNextUnlockRequirement,
    visitedSections
  } = useGame();

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const [inViewRef, inViewIntersection] = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: false,
  });

  const unlocked = isSectionUnlocked(id);
  const visited = visitedSections.includes(id);
  const requirements = getNextUnlockRequirement(id);

  useEffect(() => {
    if (inView && unlocked) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1
      });
    }
  }, [inView, unlocked, controls, delay]);

  useEffect(() => {
    if (inViewIntersection && unlocked && !visited) {
      visitSection(id);
    }
  }, [inViewIntersection, unlocked, visited, id, visitSection]);

  const getRequirementText = () => {
    if (!requirements) return "Section locked";

    const parts = [];
    if (requirements.needsLevel) {
      parts.push(`Reach Level ${requirements.needsLevel}`);
    }
    if (requirements.missingVisits.length > 0) {
      parts.push(`Visit: ${requirements.missingVisits.join(', ')}`);
    }

    return parts.join(' • ') || "Complete previous sections";
  };

  return (
    <SectionContainer
      ref={(node) => {
        ref.current = node;
        inViewRef(node);
      }}
      id={id}
      className={className}
      unlocked={unlocked}
      visited={visited}
      initial={{ opacity: 1, y: 0, scale: 1 }}
      animate={controls}
      whileHover={unlocked ? {
        scale: 1.02,
        transition: { duration: 0.2 }
      } : {}}
    >
      {children}

      {!unlocked && (
        <LockedOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="lock-icon">🔒</div>
          <div className="unlock-text">Section Locked</div>
          <div className="requirements">{getRequirementText()}</div>
        </LockedOverlay>
      )}

      {unlocked && !visited && (
        <UnlockEffect
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {visited && (
        <VisitEffect
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
        />
      )}
    </SectionContainer>
  );
}
