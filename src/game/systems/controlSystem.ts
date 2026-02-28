import type Ecs from '../ecs';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';
import type ControlComponent from '../components/ControlComponent.ts';
import type TransformComponent from '../components/TransformComponent.ts';
import type PlayerStateComponent from '../components/PlayerStateComponent.ts';
import type { GameOptions } from '../../store/gameOptions.ts';

/**
 * ECS system that applies player input to movement and climbing logic.
 *
 * Updates:
 * - Horizontal velocity from directional input
 * - Jumping when grounded
 * - Climbing behavior (disables gravity while climbing)
 *
 * @param ecs - The ECS world instance.
 * @param options - Game configuration and tunable variables.
 *
 * @remarks
 * - Operates on entities with `transform`, `rigidbody`, and `control`.
 * - Climbing overrides gravity.
 * - Jump only triggers when grounded.
 */
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
