import type { Size, Vector } from './types.ts';

export function intersects(aPos: Vector, aSize: Size, bPos: Vector, bSize: Size) {
  return (
    aPos.x < bPos.x + bSize.width &&
    aPos.x + aSize.width > bPos.x &&
    aPos.y < bPos.y + bSize.height &&
    aPos.y + aSize.height > bPos.y
  );
}
