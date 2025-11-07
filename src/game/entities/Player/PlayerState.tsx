import { type FC, useLayoutEffect } from 'react';
import useEcs from '../../ecs/useEcs.ts';
import useEntity from '../../wrappers/Entity/useEntity.ts';
import type PlayerStateComponent from '../../components/PlayerStateComponent.ts';

const PlayerState: FC = () => {
  const ecs = useEcs();
  const id = useEntity();

  useLayoutEffect(() => {
    ecs.addComponent<PlayerStateComponent>(id, 'playerState', {
      canClimb: false,
      isClimbing: false,
    });

    return () => ecs.removeComponent(id, 'playerState');
  }, [ecs, id]);

  return null;
};

export default PlayerState;
