import type { Size } from '../types.ts';
import { type FC, useLayoutEffect } from 'react';
import useEntity from './Entity/useEntity.ts';
import useEcs from '../ecs/useEcs.ts';
import { getCachedImage, loadImage } from '../ImageRegistry.ts';
import type SpriteComponent from '../components/SpriteComponent.ts';

/**
 * Props for {@link Sprite}.
 */
export interface SpriteProps {
  /** Image source URL. */
  src: string;

  /** Rendered size. */
  size: Size;

  /** Horizontal frame index in spritesheet. */
  type?: number;
}

/**
 * Declarative static sprite component.
 *
 * Loads an image (with caching) and registers
 * a SpriteComponent on the current entity.
 */
const Sprite: FC<SpriteProps> = ({ src, size, type = 0 }) => {
  const id = useEntity();
  const ecs = useEcs();

  useLayoutEffect(() => {
    let mounted = true;

    const img = getCachedImage(src);

    const apply = (image: HTMLImageElement) => {
      if (!mounted) {
        return;
      }

      ecs.addComponent<SpriteComponent>(id, 'sprite', {
        image,
        size,
        frameX: type,
      });
    };

    if (!img) {
      void loadImage(src).then(apply);
    } else {
      apply(img);
    }

    return () => {
      mounted = false;
      ecs.removeComponent(id, 'sprite');
    };
  }, [ecs, type, id, src, size]);

  return null;
};

export default Sprite;
