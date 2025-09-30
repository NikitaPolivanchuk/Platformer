import { type FC } from 'react';
import type Point from '../../core/types/Point.ts';
import GameObject from '../../core/GameObject';
import { Layer } from '../../core/types/Layer.ts';
import Sprite from '../../core/Sprite';
import verticalSpike from '@assets/vertical-spike.png';
import useGameState from '../../core/GameState/useGameState.ts';
import useGameCanvas from '../../core/GameCanvas/useGameCanvas.ts';
import type Entity from '../../core/types/Entity.ts';
import TriggerCollider from '../../core/TriggerCollider';

type VerticalSpikeProps = {
  position: Point;
  type: number;
};

const VerticalSpike: FC<VerticalSpikeProps> = ({ position, type }) => {
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
    <GameObject
      position={position}
      size={{ width: 36, height: 64 }}
      layer={Layer.Environment}
    >
      <TriggerCollider
        onTrigger={handleTrigger}
        collidesWith={Layer.Character}
      />
      <Sprite
        src={verticalSpike}
        size={{ width: 36, height: 64 }}
        type={type}
      />
    </GameObject>
  );
};

export default VerticalSpike;
