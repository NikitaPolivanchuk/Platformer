import type { Vector } from '../types.ts';

export default interface PathComponent {
  points: Vector[];
  speed: number;
  loop: boolean;
  currentIndex: number;
  direction: 1 | -1;
}
