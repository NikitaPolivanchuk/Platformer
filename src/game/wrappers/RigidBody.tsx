import { type FC, useLayoutEffect } from 'react';
import useEntity from './Entity/useEntity.ts';
import useEcs from '../ecs/useEcs.ts';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';

/**
 * Props for {@link RigidBody}.
 */
export interface RigidBodyProps {
  /** Physics body type. */
  type: 'dynamic' | 'kinematic';

  /** Gravity multiplier. */
  gravityScale?: number;

  /** Maximum fall velocity. */
  maxFallSpeed?: number;
}

/**
 * Declarative physics body component.
 *
 * Registers a RigidBodyComponent used by physics systems.
 */
const RigidBody: FC<RigidBodyProps> = ({ type, gravityScale = 0, maxFallSpeed = 0 }) => {
  const id = useEntity();
  const ecs = useEcs();

  useLayoutEffect(() => {
    ecs.addComponent<RigidBodyComponent>(id, 'rigidbody', {
      type,
      gravityScale,
      maxFallSpeed,
      groundedOn: null,
    });

    return () => ecs.removeComponent(id, 'rigidbody');
  }, [ecs, gravityScale, id, maxFallSpeed, type]);

  return null;
};

export default RigidBody;
