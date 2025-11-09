import { type FC, useLayoutEffect } from 'react';
import useEcs from '../../ecs/useEcs.ts';
import useEntity from '../../wrappers/Entity/useEntity.ts';
import type PlayerStateComponent from '../../components/PlayerStateComponent.ts';
import type { Vector } from '../../types.ts';

interface PlayerStateProps {
  startPosition: Vector;
}

const PlayerState: FC<PlayerStateProps> = ({ startPosition }) => {
  const ecs = useEcs();
  const id = useEntity();

  useLayoutEffect(() => {
    ecs.addComponent<PlayerStateComponent>(id, 'playerState', {
      invulnerableTime: 0,
      canClimb: false,
      isClimbing: false,
      startPosition: { ...startPosition },
    });

    return () => ecs.removeComponent(id, 'playerState');
  }, [ecs, id, startPosition]);

  return null;
};

export default PlayerState;
