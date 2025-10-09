import { type FC, type ReactNode, useLayoutEffect } from 'react';
import type { Vector } from '../../types.ts';
import useEcs from '../../ecs/useEcs.ts';
import EntityContext from './EntityContext.ts';
import type TransformComponent from '../../components/TransformComponent.ts';

type EntityProps = {
  id?: symbol;
  position: Vector;
  children?: ReactNode;
};

const Entity: FC<EntityProps> = ({
  id = Symbol('entity'),
  position,
  children,
}) => {
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
