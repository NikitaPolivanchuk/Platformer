import GameObject from '../../core/GameObject';
import Sprite from '../../core/Sprite';
import { Layer } from '../../core/types/Layer.ts';
import type Point from '../../core/types/Point.ts';
import type { FC } from 'react';
import wallSheet from '@assets/wall.png';

type FakeWallProps = {
  position: Point;
  type: number;
};

const FakeWall: FC<FakeWallProps> = ({ position, type }) => {
  return (
    <GameObject
      position={position}
      size={{ width: 64, height: 64 }}
      layer={Layer.Background}
    >
      <Sprite src={wallSheet} size={{ width: 64, height: 64 }} type={type} />
    </GameObject>
  );
};

export default FakeWall;
