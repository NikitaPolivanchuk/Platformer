import type { FC } from 'react';
import type Point from '../../core/types/Point.ts';
import GameObject from '../../core/GameObject';
import { Layer } from '../../core/types/Layer.ts';
import Sprite from '../../core/Sprite';
import gibSheet from '@assets/gib.png';

type GibProps = {
  position: Point;
  type: number;
};

const Gib: FC<GibProps> = ({ position, type }) => {
  return (
    <GameObject
      position={position}
      size={{ width: 20, height: 20 }}
      layer={Layer.Background}
    >
      <Sprite
        src={gibSheet}
        size={{ width: 20, height: 20 }}
        type={type}
      ></Sprite>
    </GameObject>
  );
};

export default Gib;
