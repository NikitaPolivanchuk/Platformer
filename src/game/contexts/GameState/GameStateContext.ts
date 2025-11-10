import { createContext, type SetStateAction } from 'react';

interface GameState {
  level: number;
  score: number;
  lives: number;
  paused: boolean;
  setLevel: (level: SetStateAction<number>) => void;
  setScore: (score: SetStateAction<number>) => void;
  setLives: (lives: SetStateAction<number>) => void;
  setPaused: (paused: SetStateAction<boolean>) => void;
  reset: () => void;
  worldVersion: number;
}

const GameStateContext = createContext<GameState | null>(null);

export default GameStateContext;
