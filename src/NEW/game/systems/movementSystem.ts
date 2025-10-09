import type Ecs from '../ecs';
import type TransformComponent from '../components/TransformComponent.ts';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';

const movementSystem = (ecs: Ecs, dt: number) => {
  for (const e of ecs.entitiesWith('transform')) {
    const transform = ecs.getComponent<TransformComponent>(e, 'transform')!;
    const rigid = ecs.getComponent<RigidBodyComponent>(e, 'rigidbody');

    if (rigid && rigid.groundedOn) {
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
