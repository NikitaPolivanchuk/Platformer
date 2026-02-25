import type Ecs from '../ecs';
import type TransformComponent from '../components/TransformComponent.ts';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';

/**
 * ECS system that integrates velocity into position.
 *
 * Applies movement using delta time and handles moving platforms
 * by inheriting the grounded entity's velocity.
 *
 * @param ecs - The ECS world instance.
 * @param dt - Delta time (in seconds).
 *
 * @remarks
 * - Operates on entities with `transform`.
 * - If grounded on another entity, applies platform motion.
 * - Performs simple Euler integration.
 */
const movementSystem = (ecs: Ecs, dt: number) => {
  for (const e of ecs.entitiesWith('transform')) {
    const transform = ecs.getComponent<TransformComponent>(e, 'transform')!;
    const rigid = ecs.getComponent<RigidBodyComponent>(e, 'rigidbody');

    if (rigid?.groundedOn) {
      const oTransform = ecs.getComponent<TransformComponent>(rigid.groundedOn, 'transform');
      if (oTransform) {
        transform.position.x += oTransform.velocity.x * dt;
        transform.position.y += oTransform.velocity.y * dt;
      }
    }

    transform.position.x += transform.velocity.x * dt;
    transform.position.y += transform.velocity.y * dt;
  }
};

export default movementSystem;
