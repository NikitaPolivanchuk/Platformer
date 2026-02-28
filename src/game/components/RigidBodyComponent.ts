/**
 * Adds physics simulation behavior to an entity.
 */
export default interface RigidBodyComponent {
  /** Body type affecting how physics is applied. */
  type: 'dynamic' | 'kinematic';

  /** Entity the body is currently grounded on, if any. */
  groundedOn: symbol | null;

  /** Gravity multiplier applied to this body. */
  gravityScale: number;

  /** Maximum downward velocity. */
  maxFallSpeed: number;
}
