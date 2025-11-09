import { type FC, useLayoutEffect } from 'react';
import useEntity from '../../wrappers/Entity/useEntity.ts';
import useEcs from '../../ecs/useEcs.ts';
import type { AnimationControllerComponent } from '../../components/AnimationControllerComponent.ts';
import type ControlComponent from '../../components/ControlComponent.ts';
import type PlayerStateComponent from '../../components/PlayerStateComponent.ts';
import type RigidBodyComponent from '../../components/RigidBodyComponent.ts';

const PlayerAnimationController: FC = () => {
  const id = useEntity();
  const ecs = useEcs();

  useLayoutEffect(() => {
    ecs.addComponent<AnimationControllerComponent>(id, 'animationController', {
      getAnimation: (ecs, id) => {
        const control = ecs.getComponent<ControlComponent>(id, 'control');
        const state = ecs.getComponent<PlayerStateComponent>(id, 'playerState');
        const rigid = ecs.getComponent<RigidBodyComponent>(id, 'rigidbody');

        if (state?.isClimbing) {
          return 'climb';
        }

        if (rigid && !rigid.groundedOn) {
          return 'fall';
        }

        return control?.direction.x !== 0 ? 'walk' : 'idle';
      },
    });
  }, [ecs, id]);

  return null;
};

export default PlayerAnimationController;
