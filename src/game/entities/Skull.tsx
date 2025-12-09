import type { FC } from 'react';
import Entity from '../wrappers/Entity';
import type { Vector } from '../types.ts';
import AnimatedSprite from '../wrappers/AnimatedSprite.tsx';
import spriteSrc from '@assets/skull.png';
import Collider from '../wrappers/Collider.tsx';
import { useGameState } from '../../store/gameState.ts';

interface SkullProps {
  position: Vector;
}

const Skull: FC<SkullProps> = ({ position }) => {
  const { level, update } = useGameState();

  const handleCollision = (_: symbol, other: symbol) => {
    if (other !== Symbol.for('player')) {
      return;
    }
    update({ level: level + 1 });
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
