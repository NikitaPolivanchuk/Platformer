import { type FC, type ReactNode, useState } from 'react';
import GameStateContext from './GameStateContext.ts';
import useGameOptions from '../GameOptions/useGameOptions.ts';

type GameStateProviderProps = {
  children: ReactNode;
};

const GameStateProvider: FC<GameStateProviderProps> = ({ children }) => {
  const { options } = useGameOptions();

  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [paused, setPaused] = useState(false);
  const [worldVersion, setWorldVersion] = useState(0);

  const reset = () => {
    setScore(0);
    setLevel(1);
    setLives(options.general.lives);
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

export default GameStateProvider;
