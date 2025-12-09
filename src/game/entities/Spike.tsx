import Entity from '../wrappers/Entity';
import type { Vector } from '../types.ts';
import type { FC } from 'react';
import Collider from '../wrappers/Collider.tsx';
import Sprite from '../wrappers/Sprite.tsx';
import spriteSrc from '@assets/spike.png';
import useEcs from '../ecs/useEcs.ts';
import type PlayerStateComponent from '../components/PlayerStateComponent.ts';
import type TransformComponent from '../components/TransformComponent.ts';
import { useGameState } from '../../store/gameState.ts';

interface VerticalSpikeProps {
  position: Vector;
  type: number;
}

const Spike: FC<VerticalSpikeProps> = ({ position, type }) => {
  const { lives, update } = useGameState();
  const ecs = useEcs();

  const handleCollision = (_: symbol, other: symbol) => {
    if (other !== Symbol.for('player')) {
      return;
    }

    const transform = ecs.getComponent<TransformComponent>(other, 'transform')!;
    const state = ecs.getComponent<PlayerStateComponent>(other, 'playerState')!;

    if (state.invulnerableTime > 0) {
      return;
    }

    transform.position = { ...state.startPosition };
    transform.velocity = { x: 0, y: 0 };

    state.invulnerableTime = 0.5;

    update({ lives: lives - 1 });
  };

  return (
    <Entity position={position}>
      <Sprite src={spriteSrc} size={{ width: 64, height: 64 }} type={type} />
      <Collider size={{ width: 64, height: 64 }} onTrigger={handleCollision} />
    </Entity>
  );
};

export default Spike;
