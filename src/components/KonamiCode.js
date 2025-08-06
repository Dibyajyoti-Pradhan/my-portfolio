// src/components/KonamiCode.js
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const rainbow = keyframes`
  0% { filter: hue-rotate(0deg) saturate(2); }
  25% { filter: hue-rotate(90deg) saturate(2); }
  50% { filter: hue-rotate(180deg) saturate(2); }
  75% { filter: hue-rotate(270deg) saturate(2); }
  100% { filter: hue-rotate(360deg) saturate(2); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const KonamiOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255,0,0,0.1) 0%, rgba(0,255,0,0.1) 50%, rgba(0,0,255,0.1) 100%);
  z-index: 9999;
  pointer-events: none;
  animation: ${rainbow} 2s ease-in-out infinite;
`;

const KonamiMessage = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ffff00, #ff00ff, #00ffff);
  background-size: 600% 600%;
  animation: ${rainbow} 3s ease infinite;
  color: white;
  padding: 30px 50px;
  border-radius: 20px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 0 50px rgba(255,255,255,0.5);
  z-index: 10000;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 20px 30px;
  }
`;

const Firework = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.color};
  border-radius: 50%;
`;

const EasterEggContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;
  text-align: center;
  color: white;

  .title {
    font-size: 3rem;
    margin-bottom: 20px;
    text-shadow: 0 0 20px #fff;
    animation: ${spin} 2s ease-in-out;
  }

  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 30px;
    opacity: 0.9;
  }

  .secret-info {
    background: rgba(0,0,0,0.8);
    padding: 20px;
    border-radius: 15px;
    border: 2px solid #0ff;
    max-width: 600px;

    h3 {
      color: #0ff;
      margin-bottom: 15px;
    }

    .secret-list {
      text-align: left;

      li {
        margin: 10px 0;
        padding: 5px 0;
        border-bottom: 1px solid #333;

        .key {
          color: #0f0;
          font-weight: bold;
        }

        .value {
          color: #fff;
          margin-left: 10px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .title { font-size: 2rem; }
    .subtitle { font-size: 1.2rem; }
  }
`;

export default function KonamiCode({ gameMode }) {
  const [konamiSequence] = useState(['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']);
  // eslint-disable-next-line no-unused-vars
  const [userSequence, setUserSequence] = useState([]);
  const [isActivated, setIsActivated] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    if (!gameMode) return;

    const handleKeyPress = (e) => {
      setUserSequence(prev => {
        const newSequence = [...prev, e.code].slice(-konamiSequence.length);

        // Check if sequence matches
        if (newSequence.length === konamiSequence.length) {
          const matches = newSequence.every((key, index) => key === konamiSequence[index]);
          if (matches && !isActivated) {
            setIsActivated(true);
            triggerKonamiEffect();
          }
        }

        return newSequence;
      });
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [gameMode, konamiSequence, isActivated]);

  const triggerKonamiEffect = () => {
    // Play success sound
    if (window.playSoundEffect) {
      window.playSoundEffect.success();
    }

    // Create fireworks
    const newFireworks = [];
    for (let i = 0; i < 50; i++) {
      newFireworks.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        delay: Math.random() * 2
      });
    }
    setFireworks(newFireworks);

    // Show easter egg after fireworks
    setTimeout(() => {
      setShowEasterEgg(true);
    }, 2000);

    // Hide effects after some time
    setTimeout(() => {
      setIsActivated(false);
      setShowEasterEgg(false);
      setFireworks([]);
      setUserSequence([]);
    }, 10000);
  };

  const secrets = [
    { key: 'Total Components:', value: '25+ Interactive Elements' },
    { key: 'Lines of Code:', value: '~3,000 Lines' },
    { key: 'Technologies Used:', value: 'React, Framer Motion, Canvas API, Web Audio API' },
    { key: 'Easter Eggs:', value: '7+ Hidden Features' },
    { key: 'Development Time:', value: '1 Intense Coding Session' },
    { key: 'Coffee Consumed:', value: '∞ Cups' },
    { key: 'Geek Level:', value: 'Over 9000!' },
    { key: 'Matrix Pills Taken:', value: 'Both Red and Blue' },
    { key: 'Terminal Commands:', value: '15+ Available' },
    { key: 'Particle Effects:', value: 'Real-time Physics Simulation' }
  ];

  if (!gameMode) return null;

  return (
    <AnimatePresence>
      {isActivated && (
        <>
          <KonamiOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {fireworks.map(firework => (
            <Firework
              key={firework.id}
              color={firework.color}
              style={{ left: firework.x, top: firework.y }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [1, 1, 0],
                y: [0, -100, -200]
              }}
              transition={{
                duration: 2,
                delay: firework.delay,
                ease: 'easeOut'
              }}
            />
          ))}

          {!showEasterEgg && (
            <KonamiMessage
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              🎮 KONAMI CODE ACTIVATED! 🎮
              <div style={{ fontSize: '1rem', marginTop: '10px' }}>
                Welcome to the Matrix, Neo...
              </div>
            </KonamiMessage>
          )}

          {showEasterEgg && (
            <EasterEggContainer
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <div className="title">🤯 SECRETS REVEALED 🤯</div>
              <div className="subtitle">You've unlocked the developer's vault!</div>

              <div className="secret-info">
                <h3>🔐 Portfolio Secrets & Stats</h3>
                <ul className="secret-list">
                  {secrets.map((secret, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="key">{secret.key}</span>
                      <span className="value">{secret.value}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  style={{ marginTop: '20px', fontSize: '0.9rem', color: '#888' }}
                >
                  🎉 Congratulations! You're officially a certified portfolio hacker! 🎉
                </motion.div>
              </div>
            </EasterEggContainer>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
