import type { FC } from 'react';
import type Point from '../../core/types/Point.ts';
import { Layer } from '../../core/types/Layer.ts';
import Sprite from '../../core/Sprite';
import smoothWall from '@assets/smooth-wall.png';
import GameObject from '../../core/GameObject';

type FakeSmoothWallProps = {
  position: Point;
  type: number;
};

const FakeSmoothWall: FC<FakeSmoothWallProps> = ({ position, type }) => {
  return (
    <GameObject
      position={position}
      size={{ width: 64, height: 64 }}
      layer={Layer.Background}
    >
      <Sprite src={smoothWall} size={{ width: 64, height: 64 }} type={type} />
    </GameObject>
  );
};

export default FakeSmoothWall;
