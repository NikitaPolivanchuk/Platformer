import type Point from './Point.ts';

export default interface EntityMetadata {
  grounded?: boolean;

  platform?: {
    oneWay?: boolean;
    direction?: 'up' | 'down' | 'left' | 'right';
    dropThrough?: boolean;
  };

  dropThroughTimer?: number;

  lastHitTime?: number;

  startPosition?: Point;
}
