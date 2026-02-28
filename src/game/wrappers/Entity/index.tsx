import { type FC, type ReactNode, useLayoutEffect } from 'react';
import type { Vector } from '../../types.ts';
import useEcs from '../../ecs/useEcs.ts';
import EntityContext from './EntityContext.ts';
import type TransformComponent from '../../components/TransformComponent.ts';

/**
 * Props for {@link Entity}.
 */
export type EntityProps = {
  /** Optional pre-created entity id. */
  id?: symbol;

  /** Initial world position. */
  position: Vector;

  /** Child ECS wrapper components. */
  children?: ReactNode;
};

/**
 * Declarative entity wrapper.
 *
 * Creates a Transform component and provides the entity id
 * to all nested ECS wrapper components via context.
 *
 * This allows ECS entities to be described using TSX.
 */
const Entity: FC<EntityProps> = ({ id = Symbol('entity'), position, children }) => {
  const ecs = useEcs();

  useLayoutEffect(() => {
    ecs.addComponent<TransformComponent>(id, 'transform', {
      position,
      velocity: { x: 0, y: 0 },
    });
    return () => ecs.removeComponent(id, 'transform');
  }, [ecs, id, position]);

  return <EntityContext.Provider value={id}>{children}</EntityContext.Provider>;
};

export default Entity;
