import wallSheet from '@assets/wall.png';
import type { Vector } from '../types.ts';
import type { FC } from 'react';
import Entity from '../base/Entity';
import Sprite from '../base/Sprite.tsx';
import Collider from '../base/Collider.tsx';

type WallProps = {
  position: Vector;
  type: number;
};

const Wall: FC<WallProps> = ({ position, type }) => {
  return (
    <Entity position={position}>
      <Collider size={{ width: 64, height: 64 }} />
      <Sprite src={wallSheet} size={{ width: 64, height: 64 }} type={type} />
    </Entity>
  );
};

export default Wall;
