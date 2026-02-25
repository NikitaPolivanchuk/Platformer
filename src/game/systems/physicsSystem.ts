import type Ecs from '../ecs';
import type TransformComponent from '../components/TransformComponent.ts';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';
import type { GameOptions } from '../../store/gameOptions.ts';

/**
 * ECS system that applies gravity and vertical physics updates.
 *
 * Updates vertical velocity for dynamic rigid bodies.
 *
 * @param ecs - The ECS world instance.
 * @param dt - Delta time (in seconds).
 * @param options - Game configuration containing gravity settings.
 *
 * @remarks
 * - Only affects entities with `transform` and `rigidbody`.
 * - Applies gravity scaled by `gravityScale`.
 * - Clamps fall speed to `maxFallSpeed`.
 */
const physicsSystem = (ecs: Ecs, dt: number, options: GameOptions) => {
  for (const id of ecs.entitiesWith('transform', 'rigidbody')) {
    const transform = ecs.getComponent<TransformComponent>(id, 'transform')!;
    const rigid = ecs.getComponent<RigidBodyComponent>(id, 'rigidbody')!;

    if (rigid.type === 'dynamic') {
      transform.velocity.y = Math.min(
        transform.velocity.y + rigid.gravityScale * options.variables.gravity * dt,
        rigid.maxFallSpeed,
      );
    }
  }
};

export default physicsSystem;
