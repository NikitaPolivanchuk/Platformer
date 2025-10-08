import type { Vector } from '../types.ts';

export default interface CameraComponent {
  position: Vector;
  target?: symbol;
  offset: Vector;
  lerp: number;
  zoom: number;
  bounds?: {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  };
}
