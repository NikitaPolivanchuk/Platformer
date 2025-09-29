import { type FC, useRef } from 'react';
import GameObject from '../../core/GameObject';
import { Layer } from '../../core/types/Layer.ts';
import type Point from '../../core/types/Point.ts';
import AnimatedSprite from '../../core/AnimatedSprite';
import skullSheet from '@assets/skull.png';
import TriggerCollider from '../../core/TriggerCollider';
import useGameState from '../../core/GameState/useGameState.ts';

type SkullProps = {
  position: Point;
};

const Skull: FC<SkullProps> = ({ position }) => {
  const collectedRef = useRef(false);
  const { setLevel } = useGameState();

  const handleTrigger = () => {
    if (!collectedRef.current) {
      setLevel((prev) => prev + 1);
      collectedRef.current = true;
    }
  };

  return (
    <GameObject
      position={position}
      size={{ width: 28, height: 32 }}
      layer={Layer.Item}
    >
      <AnimatedSprite
        src={skullSheet}
        frameSize={{ width: 28, height: 32 }}
        currentAnimation="default"
        animations={{
          default: {
            frameCount: 9,
            frameRate: 4,
            row: 0,
          },
        }}
      />
      <TriggerCollider
        onTrigger={handleTrigger}
        collidesWith={Layer.Character}
      />
    </GameObject>
  );
};

export default Skull;
