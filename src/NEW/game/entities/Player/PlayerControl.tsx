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
  const jump = useKeyPress(['ArrowUp', 'w', ' ']);
  const drop = useKeyPress(['ArrowDown', 's']);

  useLayoutEffect(() => {
    const direction: Vector = {
      x: (right ? 1 : 0) - (left ? 1 : 0),
      y: 0,
    };

    ecs.addComponent<ControlComponent>(id, 'control', {
      direction,
      jump,
      drop,
    });
    return () => ecs.removeComponent(id, 'control');
  }, [drop, ecs, id, jump, left, right]);

  return null;
};

export default PlayerControl;
