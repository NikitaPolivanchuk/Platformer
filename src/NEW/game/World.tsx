import { type FC, type ReactNode, useLayoutEffect, useRef } from 'react';
import Ecs from './ecs';
import EcsContext from './ecs/EcsContext.ts';
import physicsSystem from './systems/physicsSystem.ts';
import collisionSystem from './systems/collisionSystem.ts';
import { MAX_FPS } from './constants.ts';
import controlSystem from './systems/controlSystem.ts';
import cameraSystem from './systems/cameraSystem.ts';
import renderSystem from './systems/renderSystem.ts';
import pathSystem from './systems/pathSystem.ts';
import movementSystem from './systems/movementSystem.ts';

type Props = {
  children?: ReactNode;
};

const World: FC<Props> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ecsRef = useRef(new Ecs());

  useLayoutEffect(() => {
    const ecs = ecsRef.current;
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) {
      return;
    }

    let last = performance.now();
    const frameDuration = 1000 / MAX_FPS;
    let accumulator = 0;

    const loop = (time: number) => {
      const delta = time - last;
      last = time;
      accumulator += delta;

      if (accumulator >= frameDuration) {
        let dt = accumulator / 1000;
        if (dt > 0.05) {
          dt = 0.05;
        }
        accumulator = 0;

        controlSystem(ecs);
        pathSystem(ecs);
        physicsSystem(ecs, dt);
        movementSystem(ecs, dt);
        collisionSystem(ecs);
        cameraSystem(ecs, ctx);
        renderSystem(ecs, ctx, dt);
      }

      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }, []);

  return (
    <EcsContext.Provider value={ecsRef.current}>
      <canvas ref={canvasRef} width={1000} height={800} style={{ border: '1px solid' }} />
      {children}
    </EcsContext.Provider>
  );
};

export default World;
