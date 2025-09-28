import { type FC, type ReactNode, useLayoutEffect, useRef } from 'react';
import useGameCanvas from '../GameCanvas/useGameCanvas.ts';
import type Point from '../types/Point.ts';
import type Size from '../types/Size.ts';
import type Vector from '../types/Vector.ts';
import type { Layer } from '../types/Layer.ts';
import GameObjectContext from './GameObjectContext.ts';

type GameObjectProps = {
  id?: symbol;
  position: Point;
  size: Size;
  velocity?: Vector;
  layer: Layer;
  grounded?: boolean;
  children?: ReactNode;
};

const GameObject: FC<GameObjectProps> = ({
  id,
  size,
  position,
  velocity,
  layer,
  grounded,
  children,
}) => {
  const identifier = useRef(id ?? Symbol('GameObject'));
  const { registerEntity, unregisterEntity } = useGameCanvas();

  useLayoutEffect(() => {
    const id = identifier.current;
    registerEntity({ id, size, position, velocity, layer, grounded });
    return () => unregisterEntity(id);
  }, [
    grounded,
    layer,
    position,
    registerEntity,
    size,
    unregisterEntity,
    velocity,
  ]);

  return (
    <GameObjectContext.Provider value={{ id: identifier.current }}>
      {children}
    </GameObjectContext.Provider>
  );
};

export default GameObject;
