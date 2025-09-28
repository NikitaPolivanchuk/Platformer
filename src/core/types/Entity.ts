import type Point from './Point.ts';
import type Size from './Size.ts';
import type Vector from './Vector.ts';
import type { Layer } from './Layer.ts';
import type Sprite from './Sprite';

export default interface Entity {
  id: symbol;
  position: Point;
  size: Size;
  velocity?: Vector;
  layer: Layer;
  sprite?: Sprite;
}
