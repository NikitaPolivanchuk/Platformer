import type Ecs from '../ecs';
import { GRAVITY_FORCE, MAX_FALL_SPEED } from '../constants.ts';
import type TransformComponent from '../components/TransformComponent.ts';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';

const physicsSystem = (ecs: Ecs, dt: number) => {
  const entities = ecs.entitiesWith('transform', 'rigidbody');
  for (const e of entities) {
    const transform = ecs.getComponent<TransformComponent>(e, 'transform')!;
    const rigid = ecs.getComponent<RigidBodyComponent>(e, 'rigidbody')!;

    if (!rigid.grounded) {
      rigid.velocity.y += GRAVITY_FORCE * dt;
      rigid.velocity.y = Math.min(rigid.velocity.y, MAX_FALL_SPEED);
    }

    transform.position.x += rigid.velocity.x * dt;
    transform.position.y += rigid.velocity.y * dt;
  }
};

export default physicsSystem;
