import type Ecs from '../ecs';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';
import type ControlComponent from '../components/ControlComponent.ts';
import type TransformComponent from '../components/TransformComponent.ts';
import type PlayerStateComponent from '../components/PlayerStateComponent.ts';
import type { GameOptions } from '../contexts/GameOptions/GameOptions.ts';

const controlSystem = (ecs: Ecs, options: GameOptions) => {
  const players = ecs.entitiesWith('transform', 'rigidbody', 'control');

  for (const id of players) {
    const transform = ecs.getComponent<TransformComponent>(id, 'transform')!;
    const rigid = ecs.getComponent<RigidBodyComponent>(id, 'rigidbody')!;
    const input = ecs.getComponent<ControlComponent>(id, 'control')!;
    const playerState = ecs.getComponent<PlayerStateComponent>(id, 'playerState')!;

    transform.velocity.x = input.direction.x * options.variables.speed;

    rigid.gravityScale = playerState.isClimbing ? 0 : 1;

    if (playerState.canClimb && input.direction.y !== 0) {
      playerState.isClimbing = true;
      transform.velocity.y = input.direction.y * options.variables.speed;
      return;
    } else {
      playerState.isClimbing = false;
    }

    if (input.jump && rigid.groundedOn) {
      transform.velocity.y = -options.variables.jump;
    }
  }
};

export default controlSystem;
