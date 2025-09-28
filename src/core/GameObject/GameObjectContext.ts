import { createContext } from 'react';

export interface GameObject {
  id: symbol;
}

const GameObjectContext = createContext<GameObject | null>(null);

export default GameObjectContext;
