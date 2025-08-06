// src/components/common/ResizeHandle.js
import React from 'react';
import styled from 'styled-components';

const Handle = styled.div`
  position: absolute;
  background: rgba(0, 255, 0, 0.3);
  opacity: 0;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    opacity: 1;
    background: rgba(0, 255, 0, 0.6);
    box-shadow: 0 0 8px rgba(0, 255, 0, 0.8);
  }

  ${props => props.direction === 'se' && `
    bottom: -2px;
    right: -2px;
    width: 16px;
    height: 16px;
    cursor: se-resize;
    border-top: 3px solid #00ff00;
    border-left: 3px solid #00ff00;
    border-radius: 0 0 4px 0;
  `}

  ${props => props.direction === 'sw' && `
    bottom: -2px;
    left: -2px;
    width: 16px;
    height: 16px;
    cursor: sw-resize;
    border-top: 3px solid #00ff00;
    border-right: 3px solid #00ff00;
    border-radius: 0 0 0 4px;
  `}

  ${props => props.direction === 'ne' && `
    top: -2px;
    right: -2px;
    width: 16px;
    height: 16px;
    cursor: ne-resize;
    border-bottom: 3px solid #00ff00;
    border-left: 3px solid #00ff00;
    border-radius: 0 4px 0 0;
  `}

  ${props => props.direction === 'nw' && `
    top: -2px;
    left: -2px;
    width: 16px;
    height: 16px;
    cursor: nw-resize;
    border-bottom: 3px solid #00ff00;
    border-right: 3px solid #00ff00;
    border-radius: 4px 0 0 0;
  `}

  ${props => props.direction === 'e' && `
    top: 16px;
    right: -2px;
    width: 8px;
    height: calc(100% - 32px);
    cursor: e-resize;
    border-left: 3px solid #00ff00;
  `}

  ${props => props.direction === 'w' && `
    top: 16px;
    left: -2px;
    width: 8px;
    height: calc(100% - 32px);
    cursor: w-resize;
    border-right: 3px solid #00ff00;
  `}

  ${props => props.direction === 's' && `
    bottom: -2px;
    left: 16px;
    width: calc(100% - 32px);
    height: 8px;
    cursor: s-resize;
    border-top: 3px solid #00ff00;
  `}

  ${props => props.direction === 'n' && `
    top: -2px;
    left: 16px;
    width: calc(100% - 32px);
    height: 8px;
    cursor: n-resize;
    border-bottom: 3px solid #00ff00;
  `}
`;

const ResizeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 10;

  ${Handle} {
    pointer-events: auto;
  }

  &:hover ${Handle} {
    opacity: 0.8;
  }
`;

export const ResizeHandle = ({ direction, onMouseDown }) => (
  <Handle
    direction={direction}
    onMouseDown={onMouseDown}
  />
);

export const ResizableContainer = ({ handles = ['se'], onResize }) => (
  <ResizeContainer>
    {handles.map(direction => (
      <ResizeHandle
        key={direction}
        direction={direction}
        onMouseDown={(e) => onResize(e, direction)}
      />
    ))}
  </ResizeContainer>
);
