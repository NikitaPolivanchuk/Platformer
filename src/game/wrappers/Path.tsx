import useEntity from './Entity/useEntity.ts';
import useEcs from '../ecs/useEcs.ts';
import { type FC, useLayoutEffect } from 'react';
import type PathComponent from '../components/PathComponent.ts';
import type { Vector } from '../types.ts';

/**
 * Props for {@link Path}.
 */
export interface PathProps {
  /** Path points in world space. */
  points: Vector[];

  /** Movement speed. */
  speed: number;

  /** Whether path loops. */
  loop?: boolean;
}

/**
 * Declarative path-following component.
 *
 * Registers a PathComponent used by movement systems
 * to move an entity along predefined points.
 */
const Path: FC<PathProps> = ({ points, speed, loop = true }) => {
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
