import { useContext } from 'react';
import GameStateContext from './GameStateContext.ts';

const useGameState = () => {
  const ctx = useContext(GameStateContext);
  if (!ctx) {
    throw new Error('GameStateContext not found');
  }
  return ctx;
};

export default useGameState;
