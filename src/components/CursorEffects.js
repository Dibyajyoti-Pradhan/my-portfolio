// src/components/CursorEffects.js
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const trail = keyframes`
  0% { transform: scale(1) rotate(0deg); opacity: 1; }
  100% { transform: scale(0) rotate(180deg); opacity: 0; }
`;

const CursorTrail = styled(motion.div)`
  position: fixed;
  width: 8px;
  height: 8px;
  background: ${props => props.color || '#4facfe'};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  animation: ${trail} 0.6s ease-out forwards;
  box-shadow: 0 0 10px ${props => props.color || '#4facfe'};
`;

const CustomCursor = styled(motion.div)`
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid #4facfe;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: difference;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    background: #4facfe;
    border-radius: 50%;
  }
`;

const ClickRipple = styled(motion.div)`
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid #4facfe;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9997;
`;

export default function CursorEffects({ gameMode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);
  const [clicks, setClicks] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!gameMode) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Add trail
      const newTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`
      };

      setTrails(prev => [...prev.slice(-10), newTrail]);

      // Remove trail after animation
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 600);
    };

    const handleClick = (e) => {
      if (window.playSoundEffect) {
        window.playSoundEffect.click();
      }

      const newClick = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };

      setClicks(prev => [...prev, newClick]);

      setTimeout(() => {
        setClicks(prev => prev.filter(click => click.id !== newClick.id));
      }, 1000);
    };

    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.onclick) {
        setIsHovering(true);
        if (window.playSoundEffect) {
          window.playSoundEffect.hover();
        }
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, [gameMode]);

  if (!gameMode) return null;

  return (
    <>
      <CustomCursor
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28
        }}
      />

      <AnimatePresence>
        {trails.map(trail => (
          <CursorTrail
            key={trail.id}
            style={{
              left: trail.x - 4,
              top: trail.y - 4
            }}
            color={trail.color}
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {clicks.map(click => (
          <ClickRipple
            key={click.id}
            style={{
              left: click.x - 10,
              top: click.y - 10
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
