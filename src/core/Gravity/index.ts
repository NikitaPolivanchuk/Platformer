import { type FC, useLayoutEffect } from 'react';
import useGameObject from '../GameObject/useGameObject.ts';
import useGame from '../Game/useGame.ts';

const Gravity: FC = () => {
  const { id } = useGameObject();
  const { updateEntity, getEntityById, registerTick } = useGame();

  useLayoutEffect(() => {
    const tick = (dt: number) => {
      const entity = getEntityById(id);
      if (!entity || !entity.velocity) {
        return;
      }

      const y = entity.velocity.y + 100 * dt;

      updateEntity(id, {
        velocity: {
          x: entity.velocity.x,
          y: y > 200 ? 200 : y,
        },
      });
    };

    return registerTick(tick);
  }, [getEntityById, id, registerTick, updateEntity]);

  return null;
};

export default Gravity;
