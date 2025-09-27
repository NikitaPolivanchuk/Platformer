import type Size from './Size.ts';

export type SpriteDirection = 'left' | 'right';

export interface SpriteAnimation {
  frameCount: number;
  frameRate: number;
  row: number;
}

export default interface Sprite {
  image: HTMLImageElement;
  frame: number;
  frameSize: Size;
  animations: Record<string, SpriteAnimation>;
  currentAnimation: string;
  direction: SpriteDirection;
}
