import type { FC } from 'react';
import GameObject from '../../core/GameObject';
import { Layer } from '../../core/types/Layer.ts';
import type Size from 'src/core/types/Size.ts';
import Sprite from '../../core/Sprite';
import type Point from '../../core/types/Point.ts';

type BackgroundProps = {
  position: Point;
  size: Size;
  src: string;
};

const Background: FC<BackgroundProps> = ({ position, size, src }) => {
  return (
    <GameObject position={position} size={size} layer={Layer.Background}>
      <Sprite src={src} size={size} />
    </GameObject>
  );
};

export default Background;
