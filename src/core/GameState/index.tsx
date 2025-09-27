import { type FC, type ReactNode, useState } from 'react';
import GameStateContext from './GameStateContext.ts';

type GameStateProviderProps = {
  children: ReactNode;
};

const GameState: FC<GameStateProviderProps> = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [coins, setCoins] = useState(0);
  const [lives, setLives] = useState(3);

  return (
    <GameStateContext.Provider
      value={{ level, setLevel, coins, setCoins, lives, setLives }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export default GameState;
