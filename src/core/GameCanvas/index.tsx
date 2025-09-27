import { type FC, useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import type Entity from '../types/Entity.ts';
import { GameCanvasContext } from './GameCanvasContext.ts';
import type GameCanvasProps from './GameCanvasProps.ts';

const GameCanvas: FC<GameCanvasProps> = ({ children }) => {
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
      let dt = (time - last) / 1000;
      if (dt > 0.05) dt = 0.05;
      last = time;

      tickCallbackRef.current.forEach((cb) => cb(dt));

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      entitiesRef.current.forEach((e) => {
        if (e.sprite?.image) {
          const {
            image,
            frame,
            frameSize,
            currentAnimation,
            animations,
            direction,
          } = e.sprite;
          const anim = animations[currentAnimation];

          const dx = e.position.x;
          const dy = e.position.y;
          const dw = e.size.width;
          const dh = e.size.height;

          const sx = frame * frameSize.width;
          const sy = anim.row * frameSize.height;
          const sw = frameSize.width;
          const sh = frameSize.height;

          ctx.save();

          if (direction === 'left') {
            ctx.scale(-1, 1);
            ctx.drawImage(image, sx, sy, sw, sh, -(dx + dw), dy, dw, dh);
          } else {
            ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
          }

          ctx.restore();
        } else {
          ctx.fillStyle = '#000';
          ctx.fillRect(e.position.x, e.position.y, e.size.width, e.size.height);
        }
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
      entities: entitiesRef.current,
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
    <>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: '1px solid black' }}
      />
      <GameCanvasContext.Provider value={contextValue}>
        {children}
      </GameCanvasContext.Provider>
    </>
  );
};

export default GameCanvas;
