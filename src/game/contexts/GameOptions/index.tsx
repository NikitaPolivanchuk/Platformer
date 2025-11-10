import { type FC, type ReactNode, useMemo } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage.ts';
import type { GameOptions } from './GameOptions.ts';
import GameOptionsContext from './GameOptionsContext.ts';
import defaultGameOptions from './defaultGameOptions.ts';

interface GameOptionsProviderProps {
  children?: ReactNode;
}



const GameOptionsProvider: FC<GameOptionsProviderProps> = ({ children }) => {
  const [options, setOptions] = useLocalStorage<GameOptions>('options', defaultGameOptions);

  const value = useMemo(() => ({ options, setOptions }), [options, setOptions]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <GameOptionsContext.Provider value={value}>{children}</GameOptionsContext.Provider>;
};

export default GameOptionsProvider;
