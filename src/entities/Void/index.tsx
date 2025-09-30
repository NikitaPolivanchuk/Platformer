import type { FC } from 'react';
import type Size from '../../core/types/Size.ts';
import type Point from '../../core/types/Point.ts';
import GameObject from '../../core/GameObject';
import { Layer } from '../../core/types/Layer.ts';
import TriggerCollider from '../../core/TriggerCollider';
import useGameCanvas from '../../core/GameCanvas/useGameCanvas.ts';
import type Entity from '../../core/types/Entity.ts';
import useGameState from '../../core/GameState/useGameState.ts';

type VoidProps = {
  position: Point;
  size: Size;
};

const Void: FC<VoidProps> = ({ position, size }) => {
  const { setLives } = useGameState();
  const { updateEntity, getMetadata } = useGameCanvas();

  const handleTrigger = (entity: Entity) => {
    const meta = getMetadata(entity.id);
    if (!meta.startPosition) {
      return;
    }

    setLives((prev) => prev - 1);
    updateEntity(entity.id, {
      position: meta.startPosition,
    });
  };

  return (
    <GameObject position={position} size={size} layer={Layer.Background}>
      <TriggerCollider
        onTrigger={handleTrigger}
        collidesWith={Layer.Character}
      />
    </GameObject>
  );
};

export default Void;
