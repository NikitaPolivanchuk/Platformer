import { type FC, type ReactNode } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage.ts';
import type { GameOptions } from './GameOptions.ts';
import GameOptionsContext from './GameOptionsContext.ts';
import defaultGameOptions from './defaultGameOptions.ts';

interface GameOptionsProviderProps {
  children?: ReactNode;
}

const GameOptionsProvider: FC<GameOptionsProviderProps> = ({ children }) => {
  const [options, setOptions] = useLocalStorage<GameOptions>('options', defaultGameOptions);

  return (
    <GameOptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </GameOptionsContext.Provider>
  );
};

export default GameOptionsProvider;
