import { createContext } from 'react';
import type { GameCanvasContextType } from './GameCanvasContextType.ts';

export const GameCanvasContext = createContext<GameCanvasContextType | null>(
  null,
);
