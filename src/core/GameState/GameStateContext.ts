import { createContext } from 'react';

interface GameState {
  level: number;
  coins: number;
  lives: number;
  setLevel: (level: number) => void;
  setCoins: (coins: number) => void;
  setLives: (lives: number) => void;
}

const GameStateContext = createContext<GameState | null>(null);

export default GameStateContext;
