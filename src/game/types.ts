/**
 * A 2D vector representing a position, direction, or velocity.
 */
export interface Vector {
  /** Horizontal axis value. */
  x: number;

  /** Vertical axis value. */
  y: number;
}

/**
 * Represents width and height dimensions.
 */
export interface Size {
  /** Width in world or pixel units. */
  width: number;

  /** Height in world or pixel units. */
  height: number;
}

/**
 * Collision lifecycle phase.
 * - `enter`: First frame of contact.
 * - `stay`: Ongoing contact.
 * - `exit`: Contact ended.
 */
export type CollisionPhase = 'enter' | 'stay' | 'exit';
