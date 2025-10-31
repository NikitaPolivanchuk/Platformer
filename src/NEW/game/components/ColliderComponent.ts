import type { Size } from '../types.ts';

export default interface ColliderComponent {
  size: Size;
  oneWay: boolean;
  onTrigger?: (self: symbol, other: symbol, phase: 'enter' | 'stay' | 'exit') => void;
}
