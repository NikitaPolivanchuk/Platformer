import useGameObject from '../../core/GameObject/useGameObject.ts';
import useGameCanvas from '../../core/GameCanvas/useGameCanvas.ts';
import useKeyPress from '../../hooks/useKeyPress.ts';
import { useLayoutEffect } from 'react';

const MovementController = () => {
  const { id } = useGameObject();
  const { updateEntity, getEntityById, registerTick } = useGameCanvas();

  const leftKey = useKeyPress(['ArrowLeft', 'a']);
  const rightKey = useKeyPress(['ArrowRight', 'd']);
  const upKey = useKeyPress(['ArrowUp', 'w']);

  useLayoutEffect(() => {
    const tick = () => {
      const entity = getEntityById(id);
      if (!entity || !entity.velocity) {
        return;
      }

      const speedX = (-Number(leftKey) + Number(rightKey)) * 100;
      const jumpVelocity = entity.grounded && upKey ? -150 : entity.velocity.y;

      updateEntity(id, {
        velocity: {
          x: speedX,
          y: jumpVelocity,
        },
      });
    };

    return registerTick(tick);
  }, [getEntityById, id, leftKey, registerTick, rightKey, upKey, updateEntity]);

  return null;
};

export default MovementController;
