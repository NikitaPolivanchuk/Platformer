import type { Vector } from '../types.ts';
import Entity from '../base/Entity';
import Collider from '../base/Collider.tsx';
import Sprite from '../base/Sprite.tsx';
import Path from '../base/Path.tsx';
import type { FC } from 'react';
import LongPlatformSprite from '@assets/long-platform.png';
import RigidBody from '../base/RigidBody.tsx';

interface LongPlatformProps {
  position: Vector;
  points: Vector[];
  speed: number;
}

const LongPlatform: FC<LongPlatformProps> = ({ points, position, speed }) => {
  return (
    <Entity position={position}>
      <Collider size={{ width: 144, height: 12 }} oneWay />
      <Sprite src={LongPlatformSprite} size={{ width: 144, height: 12 }} />
      <RigidBody type={'kinematic'} />
      <Path points={points} speed={speed} />
    </Entity>
  );
};

export default LongPlatform;
