import type { Vector } from '../types.ts';

/**
 * Stores player control input state.
 */
export default interface ControlComponent {
  /** Movement direction input (normalized). */
  direction: Vector;

  /** Whether jump input is active. */
  jump: boolean;
}
