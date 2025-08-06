// src/components/ControlledGeekStats.js
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import GeekStats from './GeekStats';

const ControlledGeekStats = forwardRef(({ gameMode }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setIsVisible(true),
    hide: () => setIsVisible(false),
    toggle: () => setIsVisible(prev => !prev),
    isVisible: () => isVisible
  }));

  // Override the gameMode to show only when both gameMode and isVisible are true
  return <GeekStats gameMode={gameMode && isVisible} />;
});

export default ControlledGeekStats;
