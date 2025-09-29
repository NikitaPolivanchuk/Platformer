import type { FC } from 'react';
import type Point from '../../core/types/Point.ts';
import GameObject from '../../core/GameObject';
import { Layer } from '../../core/types/Layer.ts';
import stickedGibSheer from '@assets/sticked-gib.png';
import Sprite from '../../core/Sprite';

type StickedGibProps = {
  position: Point;
  type: number;
};

const StickedGib: FC<StickedGibProps> = ({ position, type }) => {
  return (
    <GameObject
      position={position}
      size={{ width: 32, height: 120 }}
      layer={Layer.Background}
    >
      <Sprite
        src={stickedGibSheer}
        size={{ width: 32, height: 120 }}
        type={type}
      />
    </GameObject>
  );
};

export default StickedGib;
