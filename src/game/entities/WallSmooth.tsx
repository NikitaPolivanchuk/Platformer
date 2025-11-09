import type { FC } from 'react';
import Entity from '../wrappers/Entity';
import spriteSrc from '@assets/wall-smooth.png';
import type { Vector } from '../types.ts';
import Sprite from '../wrappers/Sprite.tsx';
import Collider from '../wrappers/Collider.tsx';

type SmoothWallProps = {
  position: Vector;
  type: number;
};

const WallSmooth: FC<SmoothWallProps> = ({ position, type }) => {
  return (
    <Entity position={position}>
      <Collider size={{ width: 64, height: 64 }} />
      <Sprite src={spriteSrc} size={{ width: 64, height: 64 }} type={type} />
    </Entity>
  );
};

export default WallSmooth;
