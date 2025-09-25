import { type FC, useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import type Entity from '../types/Entity.ts';
import { GameContext } from './GameContext.ts';
import type GameProps from './GameProps.ts';

const Game: FC<GameProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const entitiesRef = useRef<Entity[]>([]);

  const tickCallbackRef = useRef<((dt: number) => void)[]>([]);

  const registerEntity = useCallback((entity: Entity) => {
    entitiesRef.current.push(entity);
  }, []);

  const unregisterEntity = useCallback((id: symbol) => {
    entitiesRef.current = entitiesRef.current.filter((e) => e.id !== id);
  }, []);

  const updateEntity = useCallback(
    (id: symbol, data: Partial<Omit<Entity, 'id'>>) => {
      entitiesRef.current = entitiesRef.current.map((entity) =>
        entity.id === id ? { ...entity, ...data } : entity,
      );
    },
    [],
  );

  const getEntityById = useCallback((id: symbol) => {
    return entitiesRef.current.find((entity) => entity.id === id) ?? null;
  }, []);

  const registerTick = useCallback((cb: (dt: number) => void) => {
    tickCallbackRef.current.push(cb);
    return () => {
      tickCallbackRef.current = tickCallbackRef.current.filter(
        (fn) => fn !== cb,
      );
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    let last = performance.now();

    const loop = (time: number) => {
      const dt = (time - last) / 1000;
      last = time;

      tickCallbackRef.current.forEach((cb) => cb(dt));

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      entitiesRef.current.forEach((e) => {
        ctx.fillStyle = '#000';
        ctx.fillRect(e.position.x, e.position.y, 32, 32);
      });

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, []);

  const contextValue = useMemo(
    () => ({
      registerEntity,
      unregisterEntity,
      updateEntity,
      getEntityById,
      registerTick,
    }),
    [
      registerEntity,
      unregisterEntity,
      updateEntity,
      getEntityById,
      registerTick,
    ],
  );

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: '1px solid black' }}
      />
      <GameContext.Provider value={contextValue}>
        {children}
      </GameContext.Provider>
    </div>
  );
};

export default Game;
