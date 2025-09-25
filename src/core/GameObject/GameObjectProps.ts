import type { ReactNode } from 'react';
import type Entity from '../types/Entity.ts';

export default interface GameObjectProps extends Omit<Entity, 'id'> {
  children?: ReactNode;
}
