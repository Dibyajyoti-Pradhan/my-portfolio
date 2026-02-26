// src/styles/animations.js
// Handcrafted animations for an elegant portfolio experience
// Each animation is carefully tuned for smoothness and visual delight

import { keyframes, css } from "styled-components";

// ============================================
// ENTRANCE ANIMATIONS
// Carefully crafted for first impressions
// ============================================

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const revealFromLeft = keyframes`
  from {
    clip-path: inset(0 100% 0 0);
    opacity: 0;
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`;

// ============================================
// CONTINUOUS ANIMATIONS
// Subtle, perpetual movements that add life
// ============================================

export const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`;

export const floatGentle = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-3px) rotate(0.5deg);
  }
  50% {
    transform: translateY(-6px) rotate(0deg);
  }
  75% {
    transform: translateY(-3px) rotate(-0.5deg);
  }
`;

export const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.9;
  }
`;

export const breathe = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
`;

export const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 140, 66, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 140, 66, 0.5);
  }
`;

export const subtleGlow = keyframes`
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.1);
  }
`;

// ============================================
// INTERACTIVE ANIMATIONS
// Response to user actions
// ============================================

export const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

export const drawLine = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const drawLineVertical = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

export const rotateSubtle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const wiggle = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3deg);
  }
  75% {
    transform: rotate(-3deg);
  }
`;

export const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const elasticPop = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

// ============================================
// UTILITY ANIMATIONS
// Common effects for UI elements
// ============================================

export const blink = keyframes`
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
`;

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

// ============================================
// HELPER FUNCTIONS
// Utilities for applying animations
// ============================================

// Stagger delay helper
export const getStaggerDelay = (index, baseDelay = 0.1) => `${index * baseDelay}s`;

// Create a staggered animation CSS string
export const staggeredAnimation = (animation, count, baseDelay = 0.1) => {
  let styles = '';
  for (let i = 0; i < count; i++) {
    styles += `
      &:nth-child(${i + 1}) {
        animation-delay: ${i * baseDelay}s;
      }
    `;
  }
  return css`${styles}`;
};

// Cubic bezier presets for consistent easing
export const easing = {
  smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  bouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  snappy: 'cubic-bezier(0.4, 0, 0.2, 1)',
  elegant: 'cubic-bezier(0.23, 1, 0.32, 1)',
};
