import {
  type FC,
  type ReactNode,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';
import type Entity from '../types/Entity.ts';
import { GameCanvasContext } from './GameCanvasContext.ts';
import type EntityMetadata from '../types/EntityMetadata.ts';

type GameCanvasProps = {
  children?: ReactNode;
};

const GameCanvas: FC<GameCanvasProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const entitiesRef = useRef<Entity[]>([]);
  const entityMetadataRef = useRef<Map<symbol, EntityMetadata>>(new Map());

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

  const setMetadata = useCallback(
    (id: symbol, data: Partial<EntityMetadata>) => {
      const meta = entityMetadataRef.current.get(id) ?? {};
      entityMetadataRef.current.set(id, { ...meta, ...data });
    },
    [],
  );

  const getMetadata = useCallback((id: symbol): EntityMetadata => {
    return entityMetadataRef.current.get(id) ?? {};
  }, []);

  useLayoutEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    let last = performance.now();
    const targetFPS = 180;
    const frameDuration = 1000 / targetFPS;

    let accumulator = 0;

    const loop = (time: number) => {
      const delta = time - last;
      last = time;
      accumulator += delta;

      if (accumulator >= frameDuration) {
        let dt = accumulator / 1000;
        if (dt > 0.05) dt = 0.05;

        accumulator = 0;

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
            } else if (direction === 'up') {
              ctx.scale(1, -1);
              ctx.drawImage(image, sx, sy, sw, sh, dx, -(dy + dh), dw, dh);
            } else {
              ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
            }

            ctx.restore();
          } else {
            ctx.fillStyle = '#000';
            ctx.fillRect(
              e.position.x,
              e.position.y,
              e.size.width,
              e.size.height,
            );
          }
        });
      }
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, []);

  const contextValue = useMemo(
    () => ({
      registerEntity,
      unregisterEntity,
      updateEntity,
      getAllEntities: () => entitiesRef.current,
      getEntityById,
      registerTick,
      setMetadata,
      getMetadata,
    }),
    [
      registerEntity,
      unregisterEntity,
      updateEntity,
      getEntityById,
      registerTick,
      setMetadata,
      getMetadata,
    ],
  );

  return (
    <>
      <canvas
        ref={canvasRef}
        width={1600}
        height={1000}
        style={{ border: '1px solid black', backgroundColor: '#1a1818' }}
      />
      <GameCanvasContext.Provider value={contextValue}>
        {children}
      </GameCanvasContext.Provider>
    </>
  );
};

export default GameCanvas;
