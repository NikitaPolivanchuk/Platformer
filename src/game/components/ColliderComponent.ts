import type { CollisionPhase, Size } from '../types.ts';

/**
 * Defines a rectangular collision area for an entity.
 */
export default interface ColliderComponent {
  /** Collision box dimensions. */
  size: Size;

  /** Whether the collider acts as a one-way platform. */
  oneWay: boolean;

  /**
   * Trigger callback invoked during collision phase changes.
   *
   * @param self - This entity's id.
   * @param other - The other entity's id.
   * @param phase - Current collision phase.
   */
  onTrigger?: (self: symbol, other: symbol, phase: CollisionPhase) => void;
}
