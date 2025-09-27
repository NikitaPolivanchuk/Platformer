import GameObject from '../../core/GameObject';
import Sprite from '../../core/Sprite';
import { Layer } from '../../core/types/Layer.ts';
import type Point from '../../core/types/Point.ts';
import type { FC } from 'react';
import smoothWallSheet from '@assets/smooth-wall.png';

type SmoothWallProps = {
  position: Point;
  type: number;
};

const SmoothWall: FC<SmoothWallProps> = ({ position, type }) => {
  return (
    <GameObject
      position={position}
      size={{ width: 64, height: 64 }}
      layer={Layer.Wall}
    >
      <Sprite
        src={smoothWallSheet}
        size={{ width: 64, height: 64 }}
        type={type}
      />
    </GameObject>
  );
};

export default SmoothWall;
