import { type FC, useLayoutEffect, useRef } from 'react';
import type GameObjectProps from './GameObjectProps.ts';
import GameObjectContext from './GameObjectContext.ts';
import useGameCanvas from '../GameCanvas/useGameCanvas.ts';

const GameObject: FC<GameObjectProps> = ({
  size,
  position,
  velocity,
  layer,
  children,
}) => {
  const identifier = useRef(Symbol('GameObject'));
  const { registerEntity, unregisterEntity } = useGameCanvas();

  useLayoutEffect(() => {
    const id = identifier.current;
    registerEntity({ id, size, position, velocity, layer });
    return () => unregisterEntity(id);
  }, [layer, position, registerEntity, size, unregisterEntity, velocity]);

  return (
    <GameObjectContext.Provider value={{ id: identifier.current }}>
      {children}
    </GameObjectContext.Provider>
  );
};

export default GameObject;
