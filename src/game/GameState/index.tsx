import { type FC, type ReactNode, useState } from 'react';
import GameStateContext from './GameStateContext.ts';
import { LIVES_COUNT } from '../constants.ts';

type GameStateProviderProps = {
  children: ReactNode;
};

const GameState: FC<GameStateProviderProps> = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [paused, setPaused] = useState(false);
  const [worldVersion, setWorldVersion] = useState(0);

  const reset = () => {
    setScore(0);
    setLevel(1);
    setLives(LIVES_COUNT);
    setPaused(false);
    setWorldVersion((prev) => prev + 1);
  };

  return (
    <GameStateContext.Provider
      value={{
        level,
        setLevel,
        score,
        setScore,
        lives,
        setLives,
        setPaused,
        paused,
        reset,
        worldVersion,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export default GameState;
