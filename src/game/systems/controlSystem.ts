import type Ecs from '../ecs';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';
import type ControlComponent from '../components/ControlComponent.ts';
import { JUMP_FORCE, SPEED } from '../constants.ts';
import type TransformComponent from '../components/TransformComponent.ts';
import type PlayerStateComponent from '../components/PlayerStateComponent.ts';

const controlSystem = (ecs: Ecs) => {
  const players = ecs.entitiesWith('transform', 'rigidbody', 'control');

  for (const id of players) {
    const transform = ecs.getComponent<TransformComponent>(id, 'transform')!;
    const rigid = ecs.getComponent<RigidBodyComponent>(id, 'rigidbody')!;
    const input = ecs.getComponent<ControlComponent>(id, 'control')!;
    const playerState = ecs.getComponent<PlayerStateComponent>(id, 'playerState')!;

    transform.velocity.x = input.direction.x * SPEED;

    rigid.gravityScale = playerState.isClimbing ? 0 : 1;

    if (playerState.canClimb && (input.jump || input.drop)) {
      const up = input.jump ? -1 : 0;
      const down = input.drop ? 1 : 0;

      playerState.isClimbing = true;
      transform.velocity.y = (up + down) * SPEED;

      return;
    } else {
      playerState.isClimbing = false;
    }

    if (input.jump && rigid.groundedOn) {
      transform.velocity.y = -JUMP_FORCE;
    }
  }
};

export default controlSystem;
