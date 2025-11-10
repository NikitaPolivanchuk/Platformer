import { useContext } from 'react';
import GameOptionsContext from './GameOptionsContext.ts';

const useGameOptions = () => {
  const ctx = useContext(GameOptionsContext);
  if (!ctx) {
    throw new Error('GameOptions context not found');
  }
  return ctx;
};

export default useGameOptions;
