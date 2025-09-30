import useGameObject from '../../core/GameObject/useGameObject.ts';
import useGameCanvas from '../../core/GameCanvas/useGameCanvas.ts';
import useKeyPress from '../../hooks/useKeyPress.ts';
import { useLayoutEffect } from 'react';

const MovementController = () => {
  const { id } = useGameObject();
  const {
    updateEntity,
    getEntityById,
    registerTick,
    getMetadata,
    setMetadata,
  } = useGameCanvas();

  const leftKey = useKeyPress(['ArrowLeft', 'a']);
  const rightKey = useKeyPress(['ArrowRight', 'd']);
  const upKey = useKeyPress(['ArrowUp', 'w']);
  const downKey = useKeyPress(['ArrowDown', 's']);

  useLayoutEffect(() => {
    const tick = () => {
      const entity = getEntityById(id);
      if (!entity || !entity.velocity) return;

      const meta = getMetadata(id);
      const grounded = meta.grounded ?? false;

      const speedX = (-Number(leftKey) + Number(rightKey)) * 100;

      let newVelY = entity.velocity.y;
      if (grounded && upKey && !downKey) {
        newVelY = -160;
      }

      if (grounded && downKey) {
        setMetadata(id, { grounded: false, dropThroughTimer: Date.now() });
        newVelY = 20;
      }

      updateEntity(id, {
        velocity: { x: speedX, y: newVelY },
      });
    };

    return registerTick(tick);
  }, [
    downKey,
    getEntityById,
    getMetadata,
    id,
    leftKey,
    registerTick,
    rightKey,
    setMetadata,
    upKey,
    updateEntity,
  ]);

  return null;
};

export default MovementController;
