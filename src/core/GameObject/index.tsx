import { type FC, useLayoutEffect, useRef } from 'react';
import type GameObjectProps from './GameObjectProps.ts';
import GameObjectContext from './GameObjectContext.ts';
import useGame from '../Game/useGame.ts';

const GameObject: FC<GameObjectProps> = ({
  size,
  position,
  velocity,
  children,
}) => {
  const identifier = useRef(Symbol('GameObject'));
  const { registerEntity, unregisterEntity } = useGame();

  useLayoutEffect(() => {
    const id = identifier.current;
    registerEntity({ id, size, position, velocity });
    return () => unregisterEntity(id);
  }, [position, registerEntity, size, unregisterEntity, velocity]);

  return (
    <GameObjectContext.Provider value={{ id: identifier.current }}>
      {children}
    </GameObjectContext.Provider>
  );
};

export default GameObject;
