// src/components/InteractiveParticles.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

export default function InteractiveParticles({ gameMode }) {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef();
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!gameMode) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1; // Reduced initial velocity
        this.vy = (Math.random() - 0.5) * 1; // Reduced initial velocity
        this.radius = Math.random() * 3 + 1;
        this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Smooth boundary bouncing with position correction
        if (this.x <= this.radius) {
          this.x = this.radius;
          this.vx = -this.vx * 0.85; // Damped bounce
        }
        if (this.x >= canvas.width - this.radius) {
          this.x = canvas.width - this.radius;
          this.vx = -this.vx * 0.85;
        }
        if (this.y <= this.radius) {
          this.y = this.radius;
          this.vy = -this.vy * 0.85;
        }
        if (this.y >= canvas.height - this.radius) {
          this.y = canvas.height - this.radius;
          this.vy = -this.vy * 0.85;
        }

        // Smooth mouse interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          const strength = 0.15; // Reduced interaction strength
          this.vx += (dx / distance) * force * strength;
          this.vy += (dy / distance) * force * strength;
        }

        // Velocity damping for smoother movement
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Smooth pulsing effect
        this.pulsePhase += this.pulseSpeed;
        this.radius = Math.sin(this.pulsePhase) * 1 + 2.5; // Reduced pulse amplitude
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Glow effect
        ctx.globalAlpha = this.opacity * 0.3;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    particlesRef.current = Array.from({ length: 50 }, () => new Particle());

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      // Draw connections
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.save();
            ctx.globalAlpha = (120 - distance) / 120 * 0.3;
            ctx.strokeStyle = '#4facfe';
            ctx.lineWidth = 1;
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
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameMode]);

  if (!gameMode) return null;

  return <Canvas ref={canvasRef} />;
}
