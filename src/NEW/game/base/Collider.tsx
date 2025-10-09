import type { Size } from '../types.ts';
import { type FC, useLayoutEffect } from 'react';
import useEntity from './Entity/useEntity.ts';
import useEcs from '../ecs/useEcs.ts';
import type ColliderComponent from '../components/ColliderComponent.ts';

interface ColliderProps {
  size: Size;
  oneWay?: boolean;
}

const Collider: FC<ColliderProps> = ({ size, oneWay = false }) => {
  const id = useEntity();
  const ecs = useEcs();

  useLayoutEffect(() => {
    ecs.addComponent<ColliderComponent>(id, 'collider', { size, oneWay });

    return () => ecs.removeComponent(id, 'collider');
  }, [ecs, id, oneWay, size]);

  return null;
};

export default Collider;
