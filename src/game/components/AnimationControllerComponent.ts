import type Ecs from '../ecs';

export interface AnimationControllerComponent {
  getAnimation: (ecs: Ecs, id: symbol) => string;
}
