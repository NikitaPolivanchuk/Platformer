import useEcs from '../../ecs/useEcs.ts';
import useEntity from '../../base/Entity/useEntity.ts';
import { type FC, useLayoutEffect } from 'react';
import useKeyPress from '../../../../hooks/useKeyPress.ts';
import type { Vector } from '../../types.ts';
import type ControlComponent from '../../components/ControlComponent.ts';

const PlayerControl: FC = () => {
  const id = useEntity();
  const ecs = useEcs();

  const left = useKeyPress(['ArrowLeft', 'a']);
  const right = useKeyPress(['ArrowRight', 'd']);
  const up = useKeyPress(['ArrowUp', 'w', ' ']);

  useLayoutEffect(() => {
    const direction: Vector = {
      x: (right ? 1 : 0) - (left ? 1 : 0),
      y: 0,
    };

    ecs.addComponent<ControlComponent>(id, 'control', { direction, jump: up });
    return () => ecs.removeComponent(id, 'control');
  }, [ecs, id, left, right, up]);

  return null;
};

export default PlayerControl;
