// src/components/FloatingElements.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';



const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
`;

const FloatingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
`;



const Sparkle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.color || '#ffd700'};
  border-radius: 50%;
  animation: ${sparkle} 2s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;



export default function FloatingElements({ gameMode }) {
  const [sparkles, setSparkles] = useState([]);


  useEffect(() => {
    // Generate sparkles for both modes (more in game mode, fewer in regular mode)
    const sparkleCount = gameMode ? 100 : 60;
    const newSparkles = Array.from({ length: sparkleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      color: ['#ffd700', '#4facfe', '#667eea', '#f093fb', '#f5576c'][Math.floor(Math.random() * 5)]
    }));
    setSparkles(newSparkles);
  }, [gameMode]);

    // Icon click handler removed since icons are no longer used

  // Show sparkles in both modes, but floating icons only in game mode

  return (
    <FloatingContainer>

      {/* Sparkles - available in both modes */}
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
          }}
          color={sparkle.color}
          delay={sparkle.delay}
        />
      ))}


    </FloatingContainer>
  );
}
