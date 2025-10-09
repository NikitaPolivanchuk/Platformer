import type Ecs from '../ecs';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';
import type ControlComponent from '../components/ControlComponent.ts';
import { JUMP_FORCE, SPEED } from '../constants.ts';
import type TransformComponent from '../components/TransformComponent.ts';

const controlSystem = (ecs: Ecs) => {
  const players = ecs.entitiesWith('transform', 'rigidbody', 'control');

  for (const id of players) {
    const transform = ecs.getComponent<TransformComponent>(id, 'transform')!;
    const rigid = ecs.getComponent<RigidBodyComponent>(id, 'rigidbody')!;
    const input = ecs.getComponent<ControlComponent>(id, 'control')!;

    transform.velocity.x = input.direction.x * SPEED;

    if (input.jump && rigid.groundedOn) {
      transform.velocity.y = -JUMP_FORCE;
    }
  }
};

export default controlSystem;
