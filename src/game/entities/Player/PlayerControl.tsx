import useEcs from '../../ecs/useEcs.ts';
import useEntity from '../../wrappers/Entity/useEntity.ts';
import { type FC, useLayoutEffect } from 'react';
import useKeyPress from '../../../hooks/useKeyPress.ts';
import type { Vector } from '../../types.ts';
import type ControlComponent from '../../components/ControlComponent.ts';
import { useGameOptions } from '../../../store/gameOptions.ts';

const PlayerControl: FC = () => {
  const {
    options: { keybinds },
  } = useGameOptions();
  const id = useEntity();
  const ecs = useEcs();

  const left = useKeyPress([keybinds.left]);
  const right = useKeyPress([keybinds.right]);
  const up = useKeyPress([keybinds.up]);
  const down = useKeyPress([keybinds.down]);
  const jump = useKeyPress([keybinds.jump]);

  useLayoutEffect(() => {
    const direction: Vector = {
      x: (right ? 1 : 0) - (left ? 1 : 0),
      y: (down ? 1 : 0) - (up ? 1 : 0),
    };

    ecs.addComponent<ControlComponent>(id, 'control', {
      direction,
      jump,
    });
    return () => ecs.removeComponent(id, 'control');
  }, [down, ecs, id, jump, left, right, up]);

  return null;
};

export default PlayerControl;
