import type { Vector } from '../types.ts';

/**
 * Core spatial component required for world simulation.
 * Stores position and velocity in world space.
 */
export default interface TransformComponent {
  /** World position. */
  position: Vector;

  /** Current velocity in units per second. */
  velocity: Vector;
}
