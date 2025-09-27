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
  const { registerTick, getEntityById, updateEntity, entities } =
    useGameCanvas();

  useLayoutEffect(() => {
    const tick = () => {
      const self = getEntityById(id);
      if (!self || !self.velocity) {
        return;
      }

      const newPos = { ...self.position };
      const newVel = { ...self.velocity };
      let isGrounded = false;

      for (const entity of entities) {
        if (entity.id === id || (collidesWith & entity.layer) === 0) {
          continue;
        }

        const mtv = getMTV(self, entity);
        if (!mtv) {
          continue;
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

        const onGround = isGrounded;
        if (mtv.x !== 0 && !onGround) {
          newPos.x += mtv.x;
          if ((mtv.x < 0 && newVel.x > 0) || (mtv.x > 0 && newVel.x < 0)) {
            newVel.x = 0;
          }
        }
      }

      updateEntity(id, {
        position: newPos,
        velocity: newVel,
        grounded: isGrounded,
      });
    };

    return registerTick(tick);
  }, [collidesWith, entities, getEntityById, id, registerTick, updateEntity]);

  return null;
};

export default Collider;
