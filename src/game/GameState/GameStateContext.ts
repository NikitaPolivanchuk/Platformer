import { createContext, type SetStateAction } from 'react';

interface GameState {
  level: number;
  score: number;
  lives: number;
  setLevel: (level: SetStateAction<number>) => void;
  setScore: (score: SetStateAction<number>) => void;
  setLives: (lives: SetStateAction<number>) => void;
}

const GameStateContext = createContext<GameState | null>(null);

export default GameStateContext;
