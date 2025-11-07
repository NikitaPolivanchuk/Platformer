import type { FC } from 'react';
import Entity from '../wrappers/Entity';
import Collider from '../wrappers/Collider.tsx';
import Sprite from '../wrappers/Sprite.tsx';
import ladderSheet from '@assets/ladder.png';
import type { Vector } from '../types.ts';
import useEcs from '../ecs/useEcs.ts';
import type PlayerStateComponent from '../components/PlayerStateComponent.ts';

type LadderProps = {
  position: Vector;
};

const Ladder: FC<LadderProps> = ({ position }) => {
  const esc = useEcs();

  const handleCollision = (_: symbol, other: symbol, phase: 'enter' | 'stay' | 'exit') => {
    const playerState = esc.getComponent<PlayerStateComponent>(other, 'playerState');
    if (!playerState) {
      return;
    }

    playerState.canClimb = phase === 'stay';
    if (!playerState.canClimb) {
      playerState.isClimbing = false;
    }
  };

  return (
    <Entity position={position}>
      <Collider size={{ width: 64, height: 64 }} onTrigger={handleCollision} />
      <Sprite src={ladderSheet} size={{ width: 64, height: 64 }} />
    </Entity>
  );
};

export default Ladder;
