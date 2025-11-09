import type { Vector } from '../types.ts';

export default interface PlayerStateComponent {
  canClimb: boolean;
  isClimbing: boolean;
  startPosition: Vector;
  invulnerableTime: number;
}
