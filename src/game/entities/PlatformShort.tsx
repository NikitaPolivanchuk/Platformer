import type { FC } from 'react';
import type { Vector } from '../types.ts';
import Entity from '../wrappers/Entity';
import Collider from '../wrappers/Collider.tsx';
import Sprite from '../wrappers/Sprite.tsx';
import spriteSrc from '@assets/platform-short.png';
import RigidBody from '../wrappers/RigidBody.tsx';
import Path from '../wrappers/Path.tsx';

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

type PlatformShortProps = StaticPlatform | MovingPlatform;

const PlatformShort: FC<PlatformShortProps> = ({ position, points, speed }) => {
  return (
    <Entity position={position}>
      <Collider size={{ width: 84, height: 12 }} />
      <Sprite src={spriteSrc} size={{ width: 84, height: 12 }} />
      <RigidBody type={'kinematic'} />
      {points && speed && <Path points={points} speed={speed} />}
    </Entity>
  );
};

export default PlatformShort;
