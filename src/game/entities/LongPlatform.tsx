import type { Vector } from '../types.ts';
import Entity from '../wrappers/Entity';
import Collider from '../wrappers/Collider.tsx';
import Sprite from '../wrappers/Sprite.tsx';
import Path from '../wrappers/Path.tsx';
import type { FC } from 'react';
import LongPlatformSprite from '@assets/long-platform.png';
import RigidBody from '../wrappers/RigidBody.tsx';

interface LongPlatformProps {
  position: Vector;
  points: Vector[];
  speed: number;
}

const LongPlatform: FC<LongPlatformProps> = ({ points, position, speed }) => {
  return (
    <Entity position={position}>
      <Collider size={{ width: 144, height: 12 }} />
      <Sprite src={LongPlatformSprite} size={{ width: 144, height: 12 }} />
      <RigidBody type={'kinematic'} />
      <Path points={points} speed={speed} />
    </Entity>
  );
};

export default LongPlatform;
