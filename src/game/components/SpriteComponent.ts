import type { Size } from '../types.ts';

/**
 * Static sprite rendering component (non-animated).
 */
export default interface SpriteComponent {
  /** Source image. */
  image: HTMLImageElement;

  /** Horizontal frame index in spritesheet. */
  frameX: number;

  /** Rendered size of the sprite. */
  size: Size;
}
