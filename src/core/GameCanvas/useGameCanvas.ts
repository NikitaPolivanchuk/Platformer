import { useContext } from 'react';
import { GameCanvasContext } from './GameCanvasContext.ts';

const useGameCanvas = () => {
  const ctx = useContext(GameCanvasContext);
  if (!ctx) {
    throw new Error('GameCanvas Context not found');
  }
  return ctx;
};

export default useGameCanvas;
