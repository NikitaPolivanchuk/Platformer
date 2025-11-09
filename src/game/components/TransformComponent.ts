import type { Vector } from '../types.ts';

export default interface TransformComponent {
  position: Vector;
  velocity: Vector;
}
