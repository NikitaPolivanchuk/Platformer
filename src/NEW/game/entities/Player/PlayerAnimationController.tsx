import { type FC, useLayoutEffect } from 'react';
import useEntity from '../../base/Entity/useEntity.ts';
import useEcs from '../../ecs/useEcs.ts';
import type { AnimationControllerComponent } from '../../components/AnimationControllerComponent.ts';
import type ControlComponent from '../../components/ControlComponent.ts';

const PlayerAnimationController: FC = () => {
  const id = useEntity();
  const ecs = useEcs();

  useLayoutEffect(() => {
    ecs.addComponent<AnimationControllerComponent>(id, 'animationController', {
      getAnimation: (ecs, id) => {
        const control = ecs.getComponent<ControlComponent>(id, 'control');

        return control?.direction.x !== 0 ? 'walk' : 'idle';
      },
    });
  }, [ecs, id]);

  return null;
};

export default PlayerAnimationController;
