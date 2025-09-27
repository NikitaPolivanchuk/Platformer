import { type FC, useLayoutEffect } from 'react';
import type Size from '../types/Size.ts';
import useGameObject from '../GameObject/useGameObject.ts';
import useGameCanvas from '../GameCanvas/useGameCanvas.ts';
import type { SpriteAnimation, SpriteDirection } from '../types/Sprite.ts';

type AnimatedSpriteProps = {
  src: string;
  frameSize: Size;
  currentAnimation: string;
  animations: Record<string, SpriteAnimation>;
  direction?: SpriteDirection;
};

const AnimatedSprite: FC<AnimatedSpriteProps> = ({
  src,
  frameSize,
  animations,
  currentAnimation,
  direction = 'right',
}) => {
  const { id } = useGameObject();
  const { updateEntity, getEntityById, registerTick } = useGameCanvas();

  useLayoutEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      updateEntity(id, {
        sprite: {
          image,
          frame: 0,
          frameSize,
          animations,
          currentAnimation,
          direction,
        },
      });
    };
  }, [
    animations,
    currentAnimation,
    direction,
    frameSize,
    id,
    src,
    updateEntity,
  ]);

  useLayoutEffect(() => {
    let elapsed = 0;

    const tick = (dt: number) => {
      const entity = getEntityById(id);
      if (!entity?.sprite) return;

      const { frame, currentAnimation, animations } = entity.sprite;
      const anim = animations[currentAnimation];
      if (!anim) return;

      elapsed += dt;

      const frameDuration = 1 / anim.frameRate;
      if (elapsed >= frameDuration) {
        const nextFrame = (frame + 1) % anim.frameCount;

        updateEntity(id, {
          sprite: {
            ...entity.sprite,
            frame: nextFrame,
          },
        });

        elapsed -= frameDuration;
      }
    };

    return registerTick(tick);
  }, [id, getEntityById, updateEntity, registerTick]);

  return null;
};

export default AnimatedSprite;
