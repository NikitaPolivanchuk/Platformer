import { type FC, useLayoutEffect } from 'react';
import useEntity from './Entity/useEntity.ts';
import useEcs from '../ecs/useEcs.ts';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';

interface RigidBodyProps {
  type: 'dynamic' | 'kinematic';
  gravityScale?: number;
  maxFallSpeed?: number;
}

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
