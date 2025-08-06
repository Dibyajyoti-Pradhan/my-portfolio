// src/components/CodeRain.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CodeCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
`;

export default function CodeRain({ gameMode }) {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef();

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

    // Code snippets for different programming languages
    const codeSnippets = [
      // JavaScript
      'function()', 'const', 'let', 'var', 'return', '=>', 'async', 'await', 'promise', 'React.useState',
      'useEffect', 'map', 'filter', 'reduce', 'forEach', 'setTimeout', 'console.log', 'JSON.parse',
      // Python
      'def', 'import', 'from', 'class', 'self', 'return', 'lambda', 'yield', 'try', 'except',
      'pandas', 'numpy', 'matplotlib', 'sklearn', 'tensorflow', 'django', 'flask',
      // Java
      'public', 'private', 'class', 'interface', 'extends', 'implements', 'static', 'final',
      'String', 'ArrayList', 'HashMap', 'Thread', 'Exception', 'Override', 'Spring',
      // General
      'API', 'REST', 'GraphQL', 'Docker', 'Kubernetes', 'AWS', 'Git', 'MySQL', 'MongoDB',
      'React', 'Node.js', 'TypeScript', 'HTML', 'CSS', 'SASS', 'Webpack', 'Babel',
      // Tech symbols
      '{}', '[]', '()', '<>', '||', '&&', '==', '!=', '++', '--', '=>', '...', '??',
      'null', 'undefined', 'true', 'false', '0', '1', 'new', 'this', 'super', 'extends'
    ];

    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);

    // Array to track drops
    const drops = [];
    const dropSpeeds = [];
    const dropColors = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
      dropSpeeds[i] = Math.random() * 0.5 + 0.5;
      dropColors[i] = `hsl(${120 + Math.random() * 60}, 70%, ${50 + Math.random() * 30}%)`;
    }

    const draw = () => {
      // Semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Fira Code", "Courier New", monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Pick random code snippet
        const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

        // Set color with varying opacity
        const alpha = Math.max(0.3, 1 - (drops[i] / canvas.height) * 2);
        ctx.fillStyle = dropColors[i].replace(')', `, ${alpha})`).replace('hsl', 'hsla');

        // Draw the code
        ctx.fillText(text, i * fontSize, drops[i]);

        // Move drop down
        drops[i] += dropSpeeds[i];

        // Reset drop when it goes off screen
        if (drops[i] > canvas.height + 50) {
          drops[i] = Math.random() * -200;
          dropSpeeds[i] = Math.random() * 0.5 + 0.5;
          dropColors[i] = `hsl(${120 + Math.random() * 60}, 70%, ${50 + Math.random() * 30}%)`;
        }
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameMode]);

  if (!gameMode) return null;

  return <CodeCanvas ref={canvasRef} />;
}
