import { type FC, useMemo } from 'react';
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
  const id = useMemo(() => Symbol('VerticalSpike'), []);
  const { setLives } = useGameState();
  const { getMetadata, setMetadata } = useGameCanvas();

  const handleTrigger = (entity: Entity) => {
    const now = Date.now();

    const metadata = getMetadata(entity.id);
    const lastHitTime = metadata.lastHitTime ?? 0;

    if (now - lastHitTime >= 1000) {
      setLives((prev) => prev - 1);
      setMetadata(entity.id, { lastHitTime: now });
    }
  };

  return (
    <GameObject
      id={id}
      position={position}
      size={{ width: 36, height: 56 }}
      layer={Layer.Environment}
    >
      <TriggerCollider
        onTrigger={handleTrigger}
        collidesWith={Layer.Character}
      />
      <Sprite
        src={verticalSpike}
        size={{ width: 36, height: 56 }}
        type={type}
      />
    </GameObject>
  );
};

export default VerticalSpike;
