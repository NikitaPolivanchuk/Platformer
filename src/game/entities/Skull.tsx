import type { FC } from 'react';
import Entity from '../wrappers/Entity';
import type { Vector } from '../types.ts';
import AnimatedSprite from '../wrappers/AnimatedSprite.tsx';
import spriteSrc from '@assets/skull.png';
import useGameState from '../contexts/GameState/useGameState.ts';
import Collider from '../wrappers/Collider.tsx';

interface SkullProps {
  position: Vector;
}

const Skull: FC<SkullProps> = ({ position }) => {
  const { setLevel } = useGameState();

  const handleCollision = (_: symbol, other: symbol) => {
    if (other !== Symbol.for('player')) {
      return;
    }
    setLevel((prev) => prev + 1);
  };

  return (
    <Entity position={position}>
      <AnimatedSprite
        src={spriteSrc}
        size={{ width: 28, height: 32 }}
        currentAnimation={'default'}
        animations={{
          default: {
            frameCount: 9,
            frameTime: 0.1,
            frameY: 0,
          },
        }}
      />
      <Collider size={{ width: 32, height: 32 }} onTrigger={handleCollision} />
    </Entity>
  );
};

export default Skull;
