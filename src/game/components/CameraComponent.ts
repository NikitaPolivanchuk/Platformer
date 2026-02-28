import type { Vector } from '../types.ts';

/**
 * Camera component for controlling world view and tracking.
 */
export default interface CameraComponent {
  /** Current camera position in world space. */
  position: Vector;

  /** Optional entity to follow. */
  target?: symbol;

  /** Offset applied relative to target position. */
  offset: Vector;

  /** Interpolation factor (0–1) for smooth movement. */
  lerp: number;

  /** Zoom level (1 = default scale). */
  zoom: number;

  /**
   * Optional camera bounds and edge constraints.
   */
  bounds?: {
    minX?: number;
    minY?: number;
    maxX?: number;
    maxY?: number;

    /** Prevent movement beyond top boundary. */
    top?: boolean;

    /** Prevent movement beyond bottom boundary. */
    bottom?: boolean;

    /** Prevent movement beyond left boundary. */
    left?: boolean;

    /** Prevent movement beyond right boundary. */
    right?: boolean;
  };
}
