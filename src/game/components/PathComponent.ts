import type { Vector } from '../types.ts';

/**
 * Moves an entity along a predefined path.
 */
export default interface PathComponent {
  /** Ordered path points in world space. */
  points: Vector[];

  /** Movement speed in units per second. */
  speed: number;

  /** Whether the path repeats when reaching the end. */
  loop: boolean;

  /** Current target point index. */
  currentIndex: number;

  /** Direction of traversal (1 forward, -1 backward). */
  direction: 1 | -1;
}
