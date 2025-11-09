import type { FC } from 'react';
import type { Size, Vector } from '../types.ts';
import Entity from '../wrappers/Entity';
import Collider from '../wrappers/Collider.tsx';
import useGameState from '../GameState/useGameState.ts';
import useEcs from '../ecs/useEcs.ts';
import type TransformComponent from '../components/TransformComponent.ts';
import type PlayerStateComponent from '../components/PlayerStateComponent.ts';

interface VoidProps {
  position: Vector;
  size: Size;
}

const Void: FC<VoidProps> = ({ position, size }) => {
  const { setLives } = useGameState();
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

    setLives((prev) => prev - 1);
  };

  return (
    <Entity position={position}>
      <Collider size={size} onTrigger={handleCollision} />
    </Entity>
  );
};

export default Void;
