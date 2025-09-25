import type { FC } from 'react';
import type GameObjectProps from '../../core/GameObject/GameObjectProps.ts';
import GameObject from '../../core/GameObject';
import ControlScript from './ControlScript.tsx';
import Movable from '../../core/Movable';
import Gravity from '../../core/Gravity';

const Player: FC<GameObjectProps> = (props) => {
  return (
    <GameObject {...props}>
      <ControlScript />
      <Gravity />
      <Movable />
    </GameObject>
  );
};

export default Player;
