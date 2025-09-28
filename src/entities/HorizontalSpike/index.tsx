import GameObject from '../../core/GameObject';
import type Vector from '../../core/types/Vector.ts';
import { type FC, useMemo } from 'react';
import { Layer } from '../../core/types/Layer.ts';
import Sprite from '../../core/Sprite';
import useGameState from '../../core/GameState/useGameState.ts';
import useGameCanvas from '../../core/GameCanvas/useGameCanvas.ts';
import type Entity from '../../core/types/Entity.ts';
import TriggerCollider from '../../core/TriggerCollider';
import spikeSheet from '@assets/horizontal-spike.png';

type HorizontalSpikeProps = {
  position: Vector;
  type: number;
};

const HorizontalSpike: FC<HorizontalSpikeProps> = ({ position, type }) => {
  const id = useMemo(() => Symbol('HorizontalSpike'), []);
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
      size={{ width: 56, height: 36 }}
      layer={Layer.Environment}
    >
      <TriggerCollider
        onTrigger={handleTrigger}
        collidesWith={Layer.Character}
      />
      <Sprite src={spikeSheet} type={type} size={{ width: 56, height: 36 }} />
    </GameObject>
  );
};

export default HorizontalSpike;
