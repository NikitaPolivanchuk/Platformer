import { createContext } from 'react';
import type { GameOptions } from './GameOptions.ts';

export interface GameOptionsContextType {
  options: GameOptions;
  setOptions: (value: GameOptions) => void;
}

const GameOptionsContext = createContext<GameOptionsContextType | null>(null);

export default GameOptionsContext;
