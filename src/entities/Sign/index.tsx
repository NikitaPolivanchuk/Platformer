import type { FC } from 'react';
import GameObject from '../../core/GameObject';
import Sprite from '../../core/Sprite';
import type Point from '../../core/types/Point.ts';
import { Layer } from '../../core/types/Layer.ts';
import signSheet from '@assets/sign.png';

type SignProps = {
  position: Point;
  type: number;
};

const Sign: FC<SignProps> = ({ position, type }) => {
  return (
    <GameObject
      position={position}
      size={{ width: 40, height: 44 }}
      layer={Layer.Background}
    >
      <Sprite src={signSheet} size={{ width: 40, height: 44 }} type={type} />
    </GameObject>
  );
};

export default Sign;
