import type Point from './Point.ts';
import type Size from './Size.ts';
import type Vector from './Vector.ts';

export default interface Entity {
  id: symbol;
  position: Point;
  size?: Size;
  velocity?: Vector;
}
