import type { Vector } from '../types.ts';
import Entity from '../wrappers/Entity';
import Collider from '../wrappers/Collider.tsx';
import Sprite from '../wrappers/Sprite.tsx';
import Path from '../wrappers/Path.tsx';
import type { FC } from 'react';
import spriteSrc from '@assets/platform-long.png';
import RigidBody from '../wrappers/RigidBody.tsx';

interface StaticPlatform {
  position: Vector;
  points?: undefined;
  speed?: undefined;
}

interface MovingPlatform {
  position: Vector;
  points: Vector[];
  speed: number;
}

type LongPlatformProps = StaticPlatform | MovingPlatform;

const PlatformLong: FC<LongPlatformProps> = ({ points, position, speed }) => {
  return (
    <Entity position={position}>
      <Collider size={{ width: 144, height: 12 }} />
      <Sprite src={spriteSrc} size={{ width: 144, height: 12 }} />
      <RigidBody type={'kinematic'} />
      {points && speed && <Path points={points} speed={speed} />}
    </Entity>
  );
};

export default PlatformLong;
