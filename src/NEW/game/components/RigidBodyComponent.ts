import type { Vector } from '../types.ts';

export default interface RigidBodyComponent {
  velocity: Vector;
  grounded: boolean;
}
