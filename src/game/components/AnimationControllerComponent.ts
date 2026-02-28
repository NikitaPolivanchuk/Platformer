import type Ecs from '../ecs';

/**
 * Component responsible for selecting the active animation
 * for an entity based on ECS state.
 */
export interface AnimationControllerComponent {
  /**
   * Returns the animation key that should be played.
   *
   * @param ecs - The ECS instance.
   * @param id - Entity identifier.
   */
  getAnimation: (ecs: Ecs, id: symbol) => string;
}
