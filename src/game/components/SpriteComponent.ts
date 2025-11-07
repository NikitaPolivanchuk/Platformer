import type { Size } from '../types.ts';

export default interface SpriteComponent {
  image: HTMLImageElement;
  frameX: number;
  size: Size;
}
