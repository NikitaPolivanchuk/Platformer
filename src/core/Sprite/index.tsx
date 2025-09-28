import { type FC, useLayoutEffect, useState } from 'react';
import useGameObject from '../GameObject/useGameObject.ts';
import useGameCanvas from '../GameCanvas/useGameCanvas.ts';
import type Size from '../types/Size.ts';
import type { SpriteDirection } from '../types/Sprite.ts';
import { loadImage } from '../ImageRegistry.ts';

type SpriteProps = {
  src: string;
  size?: Size;
  type?: number;
  direction?: SpriteDirection;
};

const Sprite: FC<SpriteProps> = ({ src, size, type, direction = 'right' }) => {
  const { id } = useGameObject();
  const { updateEntity, getEntityById, registerTick } = useGameCanvas();
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const spriteSize = size;

  useLayoutEffect(() => {
    let isMounted = true;
    void loadImage(src).then((img) => {
      if (!isMounted) {
        return;
      }

      setImage(img);

      updateEntity(id, {
        sprite: {
          image: img,
          frame: type ?? 0,
          frameSize: spriteSize
            ? { width: spriteSize.width, height: spriteSize.height }
            : { width: img.width, height: img.height },
          animations: { default: { frameCount: 0, frameRate: 0, row: 0 } },
          currentAnimation: 'default',
          direction,
        },
      });
    });

    return () => {
      isMounted = false;
    };
  }, [src, id, type, updateEntity, direction, spriteSize]);

  useLayoutEffect(() => {
    const tick = () => {
      const entity = getEntityById(id);
      if (!entity?.sprite && image) {
        updateEntity(id, {
          sprite: {
            image,
            frame: type ?? 0,
            frameSize: spriteSize
              ? { width: spriteSize.width, height: spriteSize.height }
              : { width: image.width, height: image.height },
            animations: { default: { frameCount: 0, frameRate: 0, row: 0 } },
            currentAnimation: 'default',
            direction,
          },
        });
      }
    };

    return registerTick(tick);
  }, [
    id,
    image,
    type,
    updateEntity,
    getEntityById,
    direction,
    spriteSize,
    registerTick,
  ]);

  return null;
};

export default Sprite;
