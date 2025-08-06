// src/components/ControlledGeekTerminal.js
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import GeekTerminal from './GeekTerminal';

const ControlledGeekTerminal = forwardRef(({ gameMode, onActivityClick, onCpuClick, onNotepadClick }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setIsVisible(true),
    hide: () => setIsVisible(false),
    toggle: () => setIsVisible(prev => !prev),
    isVisible: () => isVisible,
    maximize: () => {
      setIsVisible(true);
      // Pass maximize signal to GeekTerminal
      if (terminalRef.current && terminalRef.current.maximize) {
        terminalRef.current.maximize();
      }
    }
  }));

  const terminalRef = React.useRef();

  // Override the gameMode to show only when both gameMode and isVisible are true
    return (
            <GeekTerminal
      ref={terminalRef}
      gameMode={gameMode && isVisible}
      onActivityClick={onActivityClick}
      onCpuClick={onCpuClick}
      onNotepadClick={onNotepadClick}
    />
  );
});

export default ControlledGeekTerminal;
