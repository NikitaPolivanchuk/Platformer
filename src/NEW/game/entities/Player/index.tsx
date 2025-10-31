import { type FC } from 'react';
import Entity from '../../base/Entity';
import type { Vector } from '../../types.ts';
import Collider from '../../base/Collider.tsx';
import RigidBody from '../../base/RigidBody.tsx';
import PlayerControl from './PlayerControl.tsx';
import playerSheet from '@assets/player.png';
import AnimatedSprite from '../../base/AnimatedSprite.tsx';
import PlayerAnimationController from './PlayerAnimationController.tsx';

interface PlayerProps {
  position: Vector;
}

const Player: FC<PlayerProps> = ({ position }) => {
  return (
    <Entity id={Symbol.for('player')} position={position}>
      <PlayerAnimationController />
      <PlayerControl />
      <AnimatedSprite
        src={playerSheet}
        size={{ width: 36, height: 64 }}
        currentAnimation={'idle'}
        animations={{
          idle: {
            frameCount: 1,
            frameTime: 1,
            frameY: 0,
          },
          walk: {
            frameCount: 6,
            frameTime: 0.25,
            frameY: 0,
          },
        }}
      />
      <Collider size={{ width: 36, height: 64 }} />
      <RigidBody gravity={100} maxFallSpeed={200} type={'dynamic'} />
    </Entity>
  );
};

export default Player;
