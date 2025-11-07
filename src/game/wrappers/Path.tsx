import useEntity from './Entity/useEntity.ts';
import useEcs from '../ecs/useEcs.ts';
import { type FC, useLayoutEffect } from 'react';
import type PathComponent from '../components/PathComponent.ts';
import type { Vector } from '../types.ts';

interface PathMovementProps {
  points: Vector[];
  speed: number;
  loop?: boolean;
}

const Path: FC<PathMovementProps> = ({ points, speed, loop = true }) => {
  const id = useEntity();
  const ecs = useEcs();

  useLayoutEffect(() => {
    ecs.addComponent<PathComponent>(id, 'pathMovement', {
      points,
      speed,
      loop,
      currentIndex: 0,
      direction: 1,
    });

    return () => ecs.removeComponent(id, 'pathMovement');
  }, [ecs, id, loop, points, speed]);

  return null;
};

export default Path;
