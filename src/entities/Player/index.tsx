import type { FC } from 'react';
import GameObject from '../../core/GameObject';
import MovementController from './MovementController.tsx';
import Movable from '../../core/Movable';
import Gravity from '../../core/Gravity';
import Collider from '../../core/Collider';
import type Point from '../../core/types/Point.ts';
import { Layer } from '../../core/types/Layer.ts';
import AnimatedSprite from '../../core/AnimatedSprite';
import playerSheet from '@assets/player.png';
import AnimationController from './AnimationController.tsx';

type PlayerProps = {
  position: Point;
};

const Player: FC<PlayerProps> = ({ position }) => {
  return (
    <GameObject
      position={position}
      size={{ width: 36, height: 64 }}
      layer={Layer.Character}
      velocity={{ x: 0, y: 0 }}
      grounded={false}
    >
      <AnimationController />
      <MovementController />
      <Gravity />
      <Collider collidesWith={Layer.Wall} />
      <Movable />
      <AnimatedSprite
        src={playerSheet}
        frameSize={{ width: 36, height: 64 }}
        animations={{
          idle: {
            frameCount: 1,
            frameRate: 1,
            row: 0,
          },
          running: {
            frameCount: 6,
            frameRate: 4,
            row: 0,
          },
        }}
        currentAnimation="idle"
      />
    </GameObject>
  );
};

export default Player;
