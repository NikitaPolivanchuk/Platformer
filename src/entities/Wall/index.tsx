import GameObject from '../../core/GameObject';
import Sprite from '../../core/Sprite';
import { Layer } from '../../core/types/Layer.ts';
import type Point from '../../core/types/Point.ts';
import type { FC } from 'react';
import wallSheet from '@assets/wall.png';

type WallProps = {
  position: Point;
  type: number;
};

const Wall: FC<WallProps> = ({ position, type }) => {
  return (
    <GameObject
      position={position}
      size={{ width: 64, height: 64 }}
      layer={Layer.Wall}
    >
      <Sprite src={wallSheet} size={{ width: 64, height: 64 }} type={type} />
    </GameObject>
  );
};

export default Wall;
