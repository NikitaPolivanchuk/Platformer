import type { Vector } from '../types.ts';

/**
 * Stores extended player-specific state.
 */
export default interface PlayerStateComponent {
  /** Whether the player is allowed to climb. */
  canClimb: boolean;

  /** Whether the player is currently climbing. */
  isClimbing: boolean;

  /** Spawn or checkpoint position. */
  startPosition: Vector;

  /** Remaining invulnerability time (in seconds). */
  invulnerableTime: number;
}
