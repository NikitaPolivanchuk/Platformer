import type { Size } from '../types.ts';
import { type FC, useLayoutEffect } from 'react';
import useEntity from './Entity/useEntity.ts';
import useEcs from '../ecs/useEcs.ts';
import { getCachedImage, loadImage } from '../ImageRegistry.ts';
import type SpriteComponent from '../components/SpriteComponent.ts';

interface SpriteProps {
  src: string;
  size: Size;
  type?: number;
}

const Sprite: FC<SpriteProps> = ({ src, size, type = 0 }) => {
  const id = useEntity();
  const ecs = useEcs();

  useLayoutEffect(() => {
    let mounted = true;

    const img = getCachedImage(src);

    const applySprite = (image: HTMLImageElement) => {
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
      void loadImage(src).then(applySprite);
    } else {
      applySprite(img);
    }

    return () => {
      mounted = false;
      ecs.removeComponent(id, 'sprite');
    };
  }, [ecs, type, id, src, size]);

  return null;
};

export default Sprite;
