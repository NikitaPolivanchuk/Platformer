import { createContext } from 'react';
import type Entity from '../types/Entity.ts';
import type EntityMetadata from '../types/EntityMetadata.ts';

interface GameCanvas {
  registerEntity: (entity: Entity) => void;
  unregisterEntity: (id: symbol) => void;
  updateEntity: (id: symbol, data: Partial<Omit<Entity, 'id'>>) => void;
  getAllEntities: () => Entity[];
  getEntityById: (id: symbol) => Entity | null;
  registerTick: (callback: (dt: number) => void) => () => void;
  getMetadata: (id: symbol) => EntityMetadata;
  setMetadata: (id: symbol, data: Partial<EntityMetadata>) => void;
}

export const GameCanvasContext = createContext<GameCanvas | null>(null);
