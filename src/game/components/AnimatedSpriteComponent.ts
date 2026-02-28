import type { Size } from '../types.ts';

/**
 * Defines a single sprite animation configuration.
 */
export interface SpriteAnimation {
  /** Number of frames in the animation row. */
  frameCount: number;

  /** Time (in seconds) each frame is displayed. */
  frameTime: number;

  /** Vertical frame index (row in spritesheet). */
  frameY: number;
}

/**
 * Component for rendering and updating animated sprites.
 * Stores animation state and playback information.
 */
export default interface AnimatedSpriteComponent {
  /** Source spritesheet image. */
  image: HTMLImageElement;

  /** Rendered size of the sprite. */
  size: Size;

  /** Currently active animation key. */
  currentAnimation: string;

  /** Whether the current animation should loop. */
  loop: boolean;

  /** Map of animation names to their configuration. */
  animations: Record<string, SpriteAnimation>;

  /** Whether the sprite should be flipped horizontally. */
  flipX: boolean;

  /** Accumulated time used to advance animation frames. */
  elapsedTime: number;

  /** Current frame index within the animation. */
  currentFrame: number;
}
