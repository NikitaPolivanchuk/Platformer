import type Ecs from '../ecs';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';
import type ControlComponent from '../components/ControlComponent.ts';
import { JUMP_FORCE, SPEED } from '../constants.ts';

const controlSystem = (ecs: Ecs, dt: number) => {
  const players = ecs.entitiesWith('rigidbody', 'control');

  for (const e of players) {
    const rigid = ecs.getComponent<RigidBodyComponent>(e, 'rigidbody')!;
    const input = ecs.getComponent<ControlComponent>(e, 'control')!;

    rigid.velocity.x = input.direction.x * SPEED * dt * 1000;

    if (input.jump && rigid.grounded) {
      rigid.velocity.y = -JUMP_FORCE;
      rigid.grounded = false;
    }
  }
};

export default controlSystem;
