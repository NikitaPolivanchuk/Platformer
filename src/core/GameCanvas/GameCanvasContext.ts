import { createContext } from 'react';
import type Entity from '../types/Entity.ts';

interface GameCanvas {
  registerEntity: (entity: Entity) => void;
  unregisterEntity: (id: symbol) => void;
  updateEntity: (id: symbol, data: Partial<Omit<Entity, 'id'>>) => void;
  entities: Entity[];
  getEntityById: (id: symbol) => Entity | null;
  registerTick: (callback: (dt: number) => void) => () => void;
}

export const GameCanvasContext = createContext<GameCanvas | null>(null);
