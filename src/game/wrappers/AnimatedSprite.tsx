import { type FC, useLayoutEffect } from 'react';
import type { Size } from '../types.ts';
import useEntity from './Entity/useEntity.ts';
import useEcs from '../ecs/useEcs.ts';
import type AnimatedSpriteComponent from '../components/AnimatedSpriteComponent.ts';
import type { SpriteAnimation } from '../components/AnimatedSpriteComponent.ts';
import { getCachedImage, loadImage } from '../ImageRegistry.ts';

/**
 * Props for {@link AnimatedSprite}.
 */
export interface AnimatedSpriteProps {
  /** Image source URL. */
  src: string;

  /** Rendered size. */
  size: Size;

  /** Active animation key. */
  currentAnimation: string;

  /** Animation configuration map. */
  animations: Record<string, SpriteAnimation>;

  /** Whether animation loops. */
  loop?: boolean;

  /** Whether to flip horizontally. */
  flipX?: boolean;
}

/**
 * Declarative animated sprite component.
 *
 * Loads an image (with caching) and registers an
 * AnimatedSpriteComponent on the current entity.
 *
 * Purely declarative — rendering and animation updates
 * are handled by ECS systems.
 */
const AnimatedSprite: FC<AnimatedSpriteProps> = ({
  src,
  size,
  animations,
  currentAnimation,
  loop = true,
  flipX = false,
}) => {
  const id = useEntity();
  const ecs = useEcs();

  useLayoutEffect(() => {
    let mounted = true;

    const img = getCachedImage(src);

    const apply = (image: HTMLImageElement) => {
      if (!mounted) {
        return;
      }

      ecs.addComponent<AnimatedSpriteComponent>(id, 'animatedSprite', {
        image,
        size,
        currentAnimation,
        loop,
        flipX,
        animations,
        elapsedTime: 0,
        currentFrame: 0,
      });
    };

    if (!img) {
      void loadImage(src).then(apply);
    } else {
      apply(img);
    }

    return () => {
      mounted = false;
      ecs.removeComponent(id, 'animatedSprite');
    };
  }, [animations, currentAnimation, ecs, flipX, id, loop, size, src]);

  return null;
};

export default AnimatedSprite;
