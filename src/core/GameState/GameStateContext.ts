import { createContext } from 'react';

interface GameState {
  level: number;
  score: number;
  lives: number;
  setLevel: (level: number) => void;
  setScore: (score: number) => void;
  setLives: (lives: number) => void;
}

const GameStateContext = createContext<GameState | null>(null);

export default GameStateContext;
