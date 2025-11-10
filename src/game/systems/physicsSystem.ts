import type Ecs from '../ecs';
import type TransformComponent from '../components/TransformComponent.ts';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';
import type { GameOptions } from '../contexts/GameOptions/GameOptions.ts';

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
