import { createContext } from 'react';
import type GameObjectContextType from './GameObjectContextType.ts';

const GameObjectContext = createContext<GameObjectContextType | null>(null);

export default GameObjectContext;
