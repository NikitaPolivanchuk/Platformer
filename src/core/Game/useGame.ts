import { useContext } from 'react';
import { GameContext } from './GameContext.ts';

const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error('Game Context not found');
  }
  return ctx;
};

export default useGame;
