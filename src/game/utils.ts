import type { Size, Vector } from './types.ts';

/**
 * Determines whether two axis-aligned rectangles intersect.
 *
 * The rectangles are defined by their top-left position (`Vector`)
 * and their dimensions (`Size`). This function performs an
 * axis-aligned bounding box (AABB) collision check.
 *
 * @param aPos - Top-left position of rectangle A.
 * @param aSize - Dimensions (width and height) of rectangle A.
 * @param bPos - Top-left position of rectangle B.
 * @param bSize - Dimensions (width and height) of rectangle B.
 *
 * @returns `true` if the rectangles overlap, otherwise `false`.
 *
 * @remarks
 * - Assumes rectangles are axis-aligned (not rotated).
 * - Edges touching without overlapping will return `false`.
 *
 * @example
 * const collision = intersects(
 *   { x: 10, y: 10 },
 *   { width: 50, height: 50 },
 *   { x: 40, y: 40 },
 *   { width: 30, height: 30 }
 * );
 */
export function intersects(aPos: Vector, aSize: Size, bPos: Vector, bSize: Size) {
  return (
    aPos.x < bPos.x + bSize.width &&
    aPos.x + aSize.width > bPos.x &&
    aPos.y < bPos.y + bSize.height &&
    aPos.y + aSize.height > bPos.y
  );
}
