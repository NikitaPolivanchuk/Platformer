import { createContext } from 'react';
import type { GameContextType } from './GameContextType.ts';

export const GameContext = createContext<GameContextType | null>(null);
