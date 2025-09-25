import useGameObject from '../../core/GameObject/useGameObject.ts';
import useGame from '../../core/Game/useGame.ts';
import useKeyPress from '../../hooks/useKeyPress.ts';
import { useLayoutEffect } from 'react';

const ControlScript = () => {
  const { id } = useGameObject();
  const { updateEntity, getEntityById, registerTick } = useGame();

  const leftKey = useKeyPress(['ArrowLeft', 'a']);
  const rightKey = useKeyPress(['ArrowRight', 'd']);
  const upKey = useKeyPress(['ArrowUp', 'w']);

  useLayoutEffect(() => {
    const tick = () => {
      const entity = getEntityById(id);

      updateEntity(id, {
        velocity: {
          x: (-Number(leftKey) + Number(rightKey)) * 100,
          y: upKey ? -100 : (entity?.velocity?.y ?? 0),
        },
      });
    };

    return registerTick(tick);
  }, [getEntityById, id, leftKey, registerTick, rightKey, upKey, updateEntity]);

  return null;
};

export default ControlScript;
