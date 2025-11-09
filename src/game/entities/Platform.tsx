import Entity from '../wrappers/Entity';
import type { Vector } from '../types.ts';
import type { FC } from 'react';
import Collider from '../wrappers/Collider.tsx';
import spriteSrc from '@assets/platform.png';
import Sprite from '../wrappers/Sprite.tsx';

interface PlatformProps {
  position: Vector;
  type: number;
}

const Platform: FC<PlatformProps> = ({ position, type }) => {
  return (
    <Entity position={position}>
      <Sprite src={spriteSrc} size={{ width: 64, height: 48 }} type={type} />
      <Collider size={{ width: 64, height: 20 }} oneWay></Collider>
    </Entity>
  );
};

export default Platform;
