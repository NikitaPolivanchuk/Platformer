import { type FC, useLayoutEffect } from 'react';
import type { Vector } from '../types.ts';
import useEntity from './Entity/useEntity.ts';
import useEcs from '../ecs/useEcs.ts';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';

interface RigidBodyProps {
  velocity?: Vector;
  grounded?: boolean;
}

const RigidBody: FC<RigidBodyProps> = ({
  velocity = { x: 0, y: 0 },
  grounded = false,
}) => {
  const id = useEntity();
  const ecs = useEcs();

  useLayoutEffect(() => {
    ecs.addComponent<RigidBodyComponent>(id, 'rigidbody', {
      velocity,
      grounded,
    });

    return () => ecs.removeComponent(id, 'rigidbody');
  }, [ecs, grounded, id, velocity]);

  return null;
};

export default RigidBody;
