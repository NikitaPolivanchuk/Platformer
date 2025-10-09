import { type FC, useLayoutEffect } from 'react';
import useEntity from './Entity/useEntity.ts';
import useEcs from '../ecs/useEcs.ts';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';

interface RigidBodyProps {
  type: 'dynamic' | 'kinematic';
  gravity?: number;
  maxFallSpeed?: number;
}

const RigidBody: FC<RigidBodyProps> = ({ type, gravity = 0, maxFallSpeed = 0 }) => {
  const id = useEntity();
  const ecs = useEcs();

  useLayoutEffect(() => {
    ecs.addComponent<RigidBodyComponent>(id, 'rigidbody', {
      type,
      gravityForce: gravity,
      maxFallSpeed,
      groundedOn: null,
    });

    return () => ecs.removeComponent(id, 'rigidbody');
  }, [ecs, gravity, id, maxFallSpeed, type]);

  return null;
};

export default RigidBody;
