import { type FC, useLayoutEffect } from 'react';
import useGameObject from '../../core/GameObject/useGameObject.ts';
import useGameCanvas from '../../core/GameCanvas/useGameCanvas.ts';

const AnimationController: FC = () => {
  const { id } = useGameObject();
  const { getEntityById, updateEntity, registerTick } = useGameCanvas();

  useLayoutEffect(() => {
    const tick = () => {
      const entity = getEntityById(id);
      if (!entity?.sprite || !entity.velocity) {
        return;
      }

      let nextAnimation = entity.sprite.currentAnimation;
      let nextDirection = entity.sprite.direction;

      if (entity.velocity.x !== 0) {
        nextAnimation = 'running';
        nextDirection = entity.velocity.x < 0 ? 'left' : 'right';
      } else {
        nextAnimation = 'idle';
      }

      if (
        nextAnimation !== entity.sprite.currentAnimation ||
        nextDirection !== entity.sprite.direction
      ) {
        updateEntity(id, {
          sprite: {
            ...entity.sprite,
            currentAnimation: nextAnimation,
            direction: nextDirection,
          },
        });
      }
    };

    return registerTick(tick);
  }, [id, getEntityById, updateEntity, registerTick]);

  return null;
};

export default AnimationController;
