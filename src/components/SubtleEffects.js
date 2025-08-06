// src/components/SubtleEffects.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const SubtleCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 1; /* Make fully visible so we can see the bonds! */
`;

export default function SubtleEffects({ gameMode }) {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef();

  useEffect(() => {
    // Run in both modes - chemical bonds are awesome!

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating particles with chemical bonds
    const particles = [];
          const particleCount = gameMode ? 100 : 50; // More particles in game mode

    class SubtleParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5; // Smoother initial movement
        this.vy = (Math.random() - 0.5) * 0.5; // Smoother initial movement
        this.radius = Math.random() * 3 + 2; // Bigger particles
        this.opacity = gameMode ? Math.random() * 0.6 + 0.4 : Math.random() * 0.5 + 0.3; // More visible
        this.pulseSpeed = Math.random() * 0.01 + 0.005;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        // Add very slight random direction changes for organic movement
        this.vx += (Math.random() - 0.5) * 0.005; // Much smaller random changes
        this.vy += (Math.random() - 0.5) * 0.005;

        // Limit max velocity for smooth movement
        const maxVelocity = 1.5; // Reduced max velocity
        this.vx = Math.max(-maxVelocity, Math.min(maxVelocity, this.vx));
        this.vy = Math.max(-maxVelocity, Math.min(maxVelocity, this.vy));

        this.x += this.vx;
        this.y += this.vy;

        // Smooth boundary bouncing with damping
        // Use cached panel width to avoid DOM queries in animation loop
        if (!this.sidePanelWidth) {
          const sidePanelElement = document.querySelector('[data-panel="left"]');
          this.sidePanelWidth = sidePanelElement
            ? sidePanelElement.offsetWidth
            : window.innerWidth * 0.2;
        }

        // Left boundary (side panel right edge)
        if (this.x <= this.sidePanelWidth + this.radius) {
          this.x = this.sidePanelWidth + this.radius;
          this.vx = -this.vx * 0.8; // Consistent bounce damping
        }
        // Right boundary
        if (this.x >= canvas.width - this.radius) {
          this.x = canvas.width - this.radius;
          this.vx = -this.vx * 0.8;
        }
        // Top boundary
        if (this.y <= this.radius) {
          this.y = this.radius;
          this.vy = -this.vy * 0.8; // Consistent bounce damping
        }
        // Bottom boundary
        if (this.y >= canvas.height - this.radius) {
          this.y = canvas.height - this.radius;
          this.vy = -this.vy * 0.8; // Consistent bounce damping
        }

        // Enhanced pulsing for visibility
        this.pulsePhase += this.pulseSpeed;
        const basePulse = gameMode ? 0.5 : 0.4;
        this.opacity = (Math.sin(this.pulsePhase) * 0.2 + basePulse);
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        // Subtle gradient
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2);
        gradient.addColorStop(0, '#4facfe');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }
    }

        // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new SubtleParticle());
    }

        const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.save();
            const bondOpacity = gameMode ? 0.4 : 0.3;
            ctx.globalAlpha = (200 - distance) / 200 * bondOpacity;
            ctx.strokeStyle = '#4facfe';
            ctx.lineWidth = gameMode ? 1.5 : 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameMode]);

  // Show beautiful chemical bonds in both modes!

  return <SubtleCanvas ref={canvasRef} />;
}
