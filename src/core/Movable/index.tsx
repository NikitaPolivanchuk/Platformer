import { type FC, useLayoutEffect } from 'react';
import useGameObject from '../GameObject/useGameObject.ts';
import useGameCanvas from '../GameCanvas/useGameCanvas.ts';

const Moveable: FC = () => {
  const { id } = useGameObject();
  const { updateEntity, getEntityById, registerTick } = useGameCanvas();

  useLayoutEffect(() => {
    const tick = (dt: number) => {
      const entity = getEntityById(id);
      if (!entity) {
        return;
      }

      updateEntity(id, {
        position: {
          x: entity.position.x + (entity.velocity?.x ?? 0) * dt,
          y: entity.position.y + (entity.velocity?.y ?? 0) * dt,
        },
      });
    };

    return registerTick(tick);
  }, [getEntityById, id, registerTick, updateEntity]);

  return null;
};

export default Moveable;
