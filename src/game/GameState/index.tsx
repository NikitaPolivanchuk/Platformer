import { type FC, type ReactNode, useEffect, useState } from 'react';
import GameStateContext from './GameStateContext.ts';

type GameStateProviderProps = {
  children: ReactNode;
  onGameOver?: () => void;
};

const GameState: FC<GameStateProviderProps> = ({ children, onGameOver }) => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  useEffect(() => {
    if (onGameOver && lives <= 0) {
      onGameOver();
    }
  }, [lives, onGameOver]);

  return (
    <GameStateContext.Provider value={{ level, setLevel, score, setScore, lives, setLives }}>
      {children}
    </GameStateContext.Provider>
  );
};

export default GameState;
