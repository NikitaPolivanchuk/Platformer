import wallSheet from '@assets/wall.png';
import type { Vector } from '../types.ts';
import type { FC } from 'react';
import Entity from '../wrappers/Entity';
import Sprite from '../wrappers/Sprite.tsx';
import Collider from '../wrappers/Collider.tsx';

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
