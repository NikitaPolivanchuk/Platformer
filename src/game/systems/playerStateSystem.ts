import type Ecs from '../ecs';
import type PlayerStateComponent from '../components/PlayerStateComponent.ts';

/**
 * ECS system that updates player state timers.
 *
 * Currently, handles invulnerability countdown logic.
 *
 * @param ecs - The ECS world instance.
 * @param dt - Delta time (in seconds).
 *
 * @remarks
 * - Operates on entities with `playerState`.
 * - Ensures timers never drop below zero.
 */
const playerStateSystem = (ecs: Ecs, dt: number) => {
  for (const id of ecs.entitiesWith('playerState')) {
    const state = ecs.getComponent<PlayerStateComponent>(id, 'playerState')!;
    if (state.invulnerableTime > 0) {
      state.invulnerableTime = Math.max(0, state.invulnerableTime - dt);
    }
  }
};

export default playerStateSystem;
