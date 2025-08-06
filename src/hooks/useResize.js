// src/hooks/useResize.js
import { useState, useCallback, useRef } from 'react';

export const useResize = (initialWidth, initialHeight, minWidth = 200, minHeight = 150, maxWidth = window.innerWidth * 0.8, maxHeight = window.innerHeight * 0.8) => {
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const [isResizing, setIsResizing] = useState(false);
  const resizeRef = useRef(null);

  const startResize = useCallback((e, direction) => {
    e.preventDefault();
    e.stopPropagation();

    setIsResizing(true);
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = size.width;
    const startHeight = size.height;

    const handleMouseMove = (e) => {
      let newWidth = startWidth;
      let newHeight = startHeight;

      switch (direction) {
        case 'se': // Southeast (bottom-right)
          newWidth = startWidth + (e.clientX - startX);
          newHeight = startHeight + (e.clientY - startY);
          break;
        case 'sw': // Southwest (bottom-left)
          newWidth = startWidth - (e.clientX - startX);
          newHeight = startHeight + (e.clientY - startY);
          break;
        case 'ne': // Northeast (top-right)
          newWidth = startWidth + (e.clientX - startX);
          newHeight = startHeight - (e.clientY - startY);
          break;
        case 'nw': // Northwest (top-left)
          newWidth = startWidth - (e.clientX - startX);
          newHeight = startHeight - (e.clientY - startY);
          break;
        case 'e': // East (right)
          newWidth = startWidth + (e.clientX - startX);
          break;
        case 'w': // West (left)
          newWidth = startWidth - (e.clientX - startX);
          break;
        case 's': // South (bottom)
          newHeight = startHeight + (e.clientY - startY);
          break;
        case 'n': // North (top)
          newHeight = startHeight - (e.clientY - startY);
          break;
        default:
          break;
      }

      // Apply constraints
      newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
      newHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));

      setSize({ width: newWidth, height: newHeight });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = getResizeCursor(direction);
    document.body.style.userSelect = 'none';
  }, [size, minWidth, minHeight, maxWidth, maxHeight]);

  const getResizeCursor = (direction) => {
    switch (direction) {
      case 'se': return 'se-resize';
      case 'sw': return 'sw-resize';
      case 'ne': return 'ne-resize';
      case 'nw': return 'nw-resize';
      case 'e': return 'e-resize';
      case 'w': return 'w-resize';
      case 's': return 's-resize';
      case 'n': return 'n-resize';
      default: return 'default';
    }
  };

  return {
    size,
    isResizing,
    startResize,
    resizeRef
  };
};
