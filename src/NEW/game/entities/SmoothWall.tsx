import type { FC } from 'react';
import Entity from '../base/Entity';
import smoothWallSheet from '@assets/smooth-wall.png';
import type { Vector } from '../types.ts';
import Sprite from '../base/Sprite.tsx';
import Collider from '../base/Collider.tsx';

type SmoothWallProps = {
  position: Vector;
  type: number;
};

const SmoothWall: FC<SmoothWallProps> = ({ position, type }) => {
  return (
    <Entity position={position}>
      <Collider size={{ width: 64, height: 64 }} />
      <Sprite src={smoothWallSheet} size={{ width: 64, height: 64 }} type={type} />
    </Entity>
  );
};

export default SmoothWall;
