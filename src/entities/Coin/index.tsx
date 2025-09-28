import { type FC, useMemo, useState } from 'react';
import type Point from '../../core/types/Point.ts';
import GameObject from '../../core/GameObject';
import { Layer } from '../../core/types/Layer.ts';
import TriggerCollider from '../../core/TriggerCollider';
import AnimatedSprite from '../../core/AnimatedSprite';
import CoinSheet from '@assets/coin.png';
import useGameState from '../../core/GameState/useGameState.ts';
import useGameCanvas from '../../core/GameCanvas/useGameCanvas.ts';

type CoinProps = {
  position: Point;
};

const Coin: FC<CoinProps> = ({ position }) => {
  const id = useMemo(() => Symbol('Coin'), []);

  const [collected, setCollected] = useState(false);
  const { score, setScore } = useGameState();
  const { unregisterEntity } = useGameCanvas();

  if (collected) {
    return null;
  }

  return (
    <GameObject
      id={id}
      position={position}
      size={{ width: 20, height: 20 }}
      layer={Layer.Item}
    >
      <TriggerCollider
        onTrigger={() => {
          setCollected(true);
          setScore(score + 100);
          unregisterEntity(id);
        }}
        collidesWith={Layer.Character}
      />
      <AnimatedSprite
        src={CoinSheet}
        frameSize={{ width: 20, height: 20 }}
        animations={{
          default: {
            frameCount: 5,
            frameRate: 4,
            row: 0,
          },
        }}
        currentAnimation="default"
      />
    </GameObject>
  );
};

export default Coin;
