import { type FC, useLayoutEffect } from 'react';
import useGameObject from '../GameObject/useGameObject.ts';
import useGameCanvas from '../GameCanvas/useGameCanvas.ts';
import type Size from '../types/Size.ts';

type SpriteProps = {
  src: string;
  size?: Size;
  type?: number;
};

const Sprite: FC<SpriteProps> = ({ src, size, type }) => {
  const { id } = useGameObject();
  const { updateEntity } = useGameCanvas();

  useLayoutEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      updateEntity(id, {
        sprite: {
          image,
          frame: type ?? 0,
          frameSize: {
            width: size?.width ?? image.width,
            height: size?.height ?? image.height,
          },
          animations: {
            default: {
              frameCount: 1,
              frameRate: 1,
              row: 0,
            },
          },
          currentAnimation: 'default',
          direction: 'right',
        },
      });
    };
  }, [id, size?.height, size?.width, src, type, updateEntity]);

  return null;
};

export default Sprite;
