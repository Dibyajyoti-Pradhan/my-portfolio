// src/components/SoundEffects.js
import { useEffect, useRef } from 'react';

export default function SoundEffects({ gameMode }) {
  const audioContext = useRef(null);

  useEffect(() => {
    if (!gameMode) {
      // Clean up when exiting game mode
      if (audioContext.current && audioContext.current.state !== 'closed') {
        audioContext.current.close();
        audioContext.current = null;
      }
      return;
    }

    // Initialize Web Audio API
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    return () => {
      if (audioContext.current && audioContext.current.state !== 'closed') {
        audioContext.current.close();
        audioContext.current = null;
      }
    };
  }, [gameMode]);



  // Expose sound functions globally for other components
  useEffect(() => {
    const playSoundLocal = (frequency, duration = 0.2, type = 'sine') => {
      if (!audioContext.current || !gameMode) return;

      const oscillator = audioContext.current.createOscillator();
      const gainNode = audioContext.current.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.current.destination);

      oscillator.frequency.setValueAtTime(frequency, audioContext.current.currentTime);
      oscillator.type = type;

      gainNode.gain.setValueAtTime(0.1, audioContext.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.current.currentTime + duration);

      oscillator.start(audioContext.current.currentTime);
      oscillator.stop(audioContext.current.currentTime + duration);
    };

    if (gameMode) {
      window.playSoundEffect = {
        hover: () => playSoundLocal(800, 0.1),
        click: () => playSoundLocal(1000, 0.15),
        success: () => {
          playSoundLocal(523, 0.2);
          setTimeout(() => playSoundLocal(659, 0.2), 100);
          setTimeout(() => playSoundLocal(784, 0.3), 200);
        },
        notification: () => {
          playSoundLocal(440, 0.1);
          setTimeout(() => playSoundLocal(554, 0.1), 50);
          setTimeout(() => playSoundLocal(659, 0.2), 100);
        }
      };
    }

    return () => {
      if (window.playSoundEffect) {
        delete window.playSoundEffect;
      }
    };
  }, [gameMode]);

  return null;
}
