import GameObject from '../../core/GameObject';
import { Layer } from '../../core/types/Layer.ts';
import { type FC, useMemo } from 'react';
import type Point from '../../core/types/Point.ts';
import useGameCanvas from '../../core/GameCanvas/useGameCanvas.ts';
import Sprite from '../../core/Sprite';
import platformSheet from '@assets/platform.png';

type PlatformProps = {
  position: Point;
  type: number;
};

const Platform: FC<PlatformProps> = ({ position, type }) => {
  const id = useMemo(() => Symbol('Platform'), []);
  const { setMetadata } = useGameCanvas();

  setMetadata(id, {
    platform: {
      oneWay: true,
      direction: 'up',
    },
  });

  return (
    <GameObject
      id={id}
      position={position}
      size={{ width: 48, height: 48 }}
      layer={Layer.Wall}
    >
      <Sprite
        src={platformSheet}
        size={{ width: 48, height: 48 }}
        type={type}
      />
    </GameObject>
  );
};

export default Platform;
