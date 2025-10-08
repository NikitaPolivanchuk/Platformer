import type { Size } from '../types.ts';
import { type FC, useLayoutEffect } from 'react';
import useEntity from './Entity/useEntity.ts';
import useEcs from '../ecs/useEcs.ts';
import type ColliderComponent from '../components/ColliderComponent.ts';

interface ColliderProps {
  size: Size;
}

const Collider: FC<ColliderProps> = ({ size }) => {
  const id = useEntity();
  const ecs = useEcs();

  useLayoutEffect(() => {
    ecs.addComponent<ColliderComponent>(id, 'collider', { size });

    return () => ecs.removeComponent(id, 'collider');
  }, [ecs, id, size]);

  return null;
};

export default Collider;
