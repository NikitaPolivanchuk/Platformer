import type { CollisionPhase, Size } from '../types.ts';

export default interface ColliderComponent {
  size: Size;
  oneWay: boolean;
  onTrigger?: (self: symbol, other: symbol, phase: CollisionPhase) => void;
}
