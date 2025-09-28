import { type FC, useLayoutEffect } from 'react';
import useGameCanvas from '../GameCanvas/useGameCanvas.ts';
import useGameObject from '../GameObject/useGameObject.ts';
import { getMTV } from '../utils';
import type { Layer } from '../types/Layer.ts';

type ColliderProps = {
  collidesWith: Layer;
};

const Collider: FC<ColliderProps> = ({ collidesWith }) => {
  const { id } = useGameObject();
  const {
    registerTick,
    getEntityById,
    updateEntity,
    getAllEntities,
    getMetadata,
    setMetadata,
  } = useGameCanvas();

  useLayoutEffect(() => {
    const tick = () => {
      const self = getEntityById(id);
      if (!self || !self.velocity) {
        return;
      }

      const newPos = { ...self.position };
      const newVel = { ...self.velocity };
      let isGrounded = false;

      const entities = getAllEntities();
      const selfMeta = getMetadata(id);

      for (const entity of entities) {
        if (entity.id === id || (collidesWith & entity.layer) === 0) {
          continue;
        }

        const mtv = getMTV(self, entity);
        if (!mtv) {
          continue;
        }

        const meta = getMetadata(entity.id);

        if (meta.platform?.oneWay) {
          const playerBottom = self.position.y + self.size.height;
          const platformTop = entity.position.y;
          const fallingOnto =
            self.velocity.y >= 0 && playerBottom <= platformTop + 5;

          if (!fallingOnto) continue;
          if (
            selfMeta.dropThroughTimer &&
            Date.now() - selfMeta.dropThroughTimer < 200
          ) {
            continue;
          }
        }

        if (mtv.y !== 0 && newVel.y >= 0) {
          newPos.y += mtv.y;

          if ((mtv.y < 0 && newVel.y > 0) || (mtv.y > 0 && newVel.y < 0)) {
            newVel.y = 0;
          }

          if (mtv.y < 0 && newVel.y === 0) {
            isGrounded = true;
          }
        }

        if (mtv.x !== 0 && !isGrounded) {
          newPos.x += mtv.x;
          if ((mtv.x < 0 && newVel.x > 0) || (mtv.x > 0 && newVel.x < 0)) {
            newVel.x = 0;
          }
        }
      }

      updateEntity(id, {
        position: newPos,
        velocity: newVel,
      });

      setMetadata(id, {
        grounded: isGrounded,
      });
    };

    return registerTick(tick);
  }, [
    collidesWith,
    getAllEntities,
    getEntityById,
    id,
    registerTick,
    updateEntity,
  ]);

  return null;
};

export default Collider;
