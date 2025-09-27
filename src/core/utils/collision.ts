import type Entity from '../types/Entity.ts';

export const getMTV = (a: Entity, b: Entity) => {
  const ax1 = a.position.x;
  const ay1 = a.position.y;
  const ax2 = ax1 + a.size.width;
  const ay2 = ay1 + a.size.height;

  const bx1 = b.position.x;
  const by1 = b.position.y;
  const bx2 = bx1 + b.size.width;
  const by2 = by1 + b.size.height;

  const overlapX = Math.min(ax2, bx2) - Math.max(ax1, bx1);
  const overlapY = Math.min(ay2, by2) - Math.max(ay1, by1);

  if (overlapX > 0 && overlapY > 0) {
    if (overlapX < overlapY) {
      const direction =
        ax1 + a.size.width / 2 < bx1 + b.size.width / 2 ? -1 : 1;
      return { x: direction * overlapX, y: 0 };
    } else {
      const direction =
        ay1 + a.size.height / 2 < by1 + b.size.height / 2 ? -1 : 1;
      return { x: 0, y: direction * overlapY };
    }
  }

  return null;
};
