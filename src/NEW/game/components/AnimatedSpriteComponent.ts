import type { Size } from '../types.ts';

export interface SpriteAnimation {
  frameCount: number;
  frameTime: number;
  frameY: number;
}

export default interface AnimatedSpriteComponent {
  image: HTMLImageElement;
  size: Size;
  currentAnimation: string;
  loop: boolean;
  animations: Record<string, SpriteAnimation>;
  flipX: boolean;
  elapsedTime: number;
  currentFrame: number;
}
