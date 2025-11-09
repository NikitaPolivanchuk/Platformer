import type Ecs from '../ecs';
import type PlayerStateComponent from '../components/PlayerStateComponent.ts';

const playerStateSystem = (ecs: Ecs, dt: number) => {
  for (const id of ecs.entitiesWith('playerState')) {
    const state = ecs.getComponent<PlayerStateComponent>(id, 'playerState')!;
    if (state.invulnerableTime > 0) {
      state.invulnerableTime = Math.max(0, state.invulnerableTime - dt);
    }
  }
};

export default playerStateSystem;
