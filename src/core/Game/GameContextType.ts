import type Entity from '../types/Entity.ts';

export interface GameContextType {
  registerEntity: (entity: Entity) => void;
  unregisterEntity: (id: symbol) => void;
  updateEntity: (id: symbol, data: Partial<Omit<Entity, 'id'>>) => void;
  getEntityById: (id: symbol) => Entity | null;
  registerTick: (callback: (dt: number) => void) => () => void;
}
