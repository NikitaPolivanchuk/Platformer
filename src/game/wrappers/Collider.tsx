import type { Size } from '../types.ts';
import { type FC, useLayoutEffect } from 'react';
import useEntity from './Entity/useEntity.ts';
import useEcs from '../ecs/useEcs.ts';
import type ColliderComponent from '../components/ColliderComponent.ts';

/**
 * Props for {@link Collider}.
 */
export interface ColliderProps {
  /** Collision box size. */
  size: Size;

  /** Whether collider acts as a one-way platform. */
  oneWay?: boolean;

  /** Collision trigger callback. */
  onTrigger?: (self: symbol, other: symbol, phase: 'enter' | 'stay' | 'exit') => void;
}

/**
 * Declarative collision component.
 *
 * Registers a ColliderComponent on the current entity.
 */
const Collider: FC<ColliderProps> = ({ size, oneWay = false, onTrigger }) => {
  const id = useEntity();
  const ecs = useEcs();

  useLayoutEffect(() => {
    ecs.addComponent<ColliderComponent>(id, 'collider', { size, oneWay, onTrigger });

    return () => ecs.removeComponent(id, 'collider');
  }, [ecs, id, onTrigger, oneWay, size]);

  return null;
};

export default Collider;
