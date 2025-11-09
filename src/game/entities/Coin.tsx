import { type FC, useState } from 'react';
import type { Vector } from '../types.ts';
import useGameState from '../GameState/useGameState.ts';
import useEcs from '../ecs/useEcs.ts';
import { COIN_SCORE } from '../constants.ts';
import Entity from '../wrappers/Entity';
import spriteSrc from '@assets/coin.png';
import AnimatedSprite from '../wrappers/AnimatedSprite.tsx';
import Collider from '../wrappers/Collider.tsx';

interface CoinProps {
  position: Vector;
}

const Coin: FC<CoinProps> = ({ position }) => {
  const { setScore } = useGameState();
  const ecs = useEcs();
  const [collected, setCollected] = useState(false);

  if (collected) {
    return null;
  }

  const handleCollision = (self: symbol, other: symbol) => {
    if (other !== Symbol.for('player')) {
      return;
    }
    setScore((prev) => prev + COIN_SCORE);
    ecs.removeEntity(self);
    setCollected(true);
  };

  return (
    <Entity position={position}>
      <AnimatedSprite
        src={spriteSrc}
        size={{ width: 20, height: 20 }}
        currentAnimation={'default'}
        animations={{
          default: {
            frameCount: 5,
            frameTime: 0.1,
            frameY: 0,
          },
        }}
      />
      <Collider size={{ width: 20, height: 20 }} onTrigger={handleCollision} />
    </Entity>
  );
};

export default Coin;
