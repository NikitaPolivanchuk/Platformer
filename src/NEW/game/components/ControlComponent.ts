import type { Vector } from '../types.ts';

export default interface ControlComponent {
  direction: Vector;
  jump: boolean;
  drop: boolean;
}
