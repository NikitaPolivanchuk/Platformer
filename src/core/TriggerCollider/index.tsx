import { type FC, useLayoutEffect } from 'react';
import type Entity from '../types/Entity.ts';
import type { Layer } from '../types/Layer.ts';
import useGameCanvas from '../GameCanvas/useGameCanvas.ts';
import useGameObject from '../GameObject/useGameObject.ts';
import { checkCollision } from '../utils';

type TriggerColliderProps = {
  onTrigger: (entity: Entity) => void;
  collidesWith: Layer;
};

const TriggerCollider: FC<TriggerColliderProps> = ({
  onTrigger,
  collidesWith,
}) => {
  const { id } = useGameObject();
  const { getEntityById, registerTick, getAllEntities } = useGameCanvas();

  useLayoutEffect(() => {
    const tick = () => {
      const self = getEntityById(id);
      if (!self) return;

      const entities = getAllEntities();

      for (const entity of entities) {
        if (entity.id === id || (collidesWith & entity.layer) === 0) {
          continue;
        }

        const isOverlap = checkCollision(self, entity);

        if (isOverlap) {
          onTrigger(entity);
        }
      }
    };

    return registerTick(tick);
  }, [
    collidesWith,
    getEntityById,
    id,
    registerTick,
    onTrigger,
    getAllEntities,
  ]);

  return null;
};

export default TriggerCollider;
