import { type FC, type ReactNode, useLayoutEffect, useMemo, useRef } from 'react';
import Ecs from './ecs';
import EcsContext from './ecs/EcsContext.ts';
import physicsSystem from './systems/physicsSystem.ts';
import { createCollisionSystem } from './systems/collisionSystem.ts';
import { MAX_FPS } from './constants.ts';
import controlSystem from './systems/controlSystem.ts';
import cameraSystem from './systems/cameraSystem.ts';
import renderSystem from './systems/renderSystem.ts';
import pathSystem from './systems/pathSystem.ts';
import movementSystem from './systems/movementSystem.ts';
import useWindowSize from '../hooks/useWindowSize.ts';
import type { Size } from './types.ts';
import type CameraComponent from './components/CameraComponent.ts';
import playerStateSystem from './systems/playerStateSystem.ts';
import useGameState from './contexts/GameState/useGameState.ts';
import useGameOptions from './contexts/GameOptions/useGameOptions.ts';

type Props = {
  children?: ReactNode;
  mapSize: Size;
};

const World: FC<Props> = ({ mapSize, children }) => {
  const { options } = useGameOptions();
  const { paused } = useGameState();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ecsRef = useRef(new Ecs());
  ecsRef.current.paused = paused;

  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const collisionSystem = useMemo(() => createCollisionSystem(), []);

  useLayoutEffect(() => {
    const ecs = ecsRef.current;
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    let mounted = true;
    let last = performance.now();
    const frameDuration = 1000 / MAX_FPS;
    let accumulator = 0;

    const loop = (time: number) => {
      if (!mounted) {
        return;
      }

      const delta = time - last;
      last = time;
      accumulator += delta;

      if (accumulator >= frameDuration) {
        let dt = accumulator / 1000;
        if (dt > 0.05) {
          dt = 0.05;
        }
        accumulator = 0;

        if (!ecs.paused) {
          controlSystem(ecs, options);
          pathSystem(ecs);
          physicsSystem(ecs, dt, options);
          movementSystem(ecs, dt);
          collisionSystem(ecs);
          playerStateSystem(ecs, dt);
        }
        cameraSystem(ecs, ctx);
        renderSystem(ecs, ctx, dt);
      }

      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    return () => {
      mounted = false;
    };
  }, [collisionSystem, mapSize, options, windowHeight, windowWidth]);

  useLayoutEffect(() => {
    const ecs = ecsRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    const cameraEntities = ecs.entitiesWith('camera');

    for (const camId of cameraEntities) {
      const cam = ecs.getComponent<CameraComponent>(camId, 'camera');
      if (!cam) continue;

      const viewportWidth = canvas.width / cam.zoom;
      const viewportHeight = canvas.height / cam.zoom;

      const minZoomX =
        cam.bounds?.left !== false && cam.bounds?.right !== false
          ? canvas.width / mapSize.width
          : 0;

      const minZoomY =
        cam.bounds?.top !== false && cam.bounds?.bottom !== false
          ? canvas.height / mapSize.height
          : 0;

      const minZoom = Math.max(minZoomX, minZoomY);
      if (cam.zoom < minZoom) cam.zoom = minZoom;

      const minX = cam.bounds?.left === false ? -(viewportWidth - mapSize.width) / 2 : 0;
      const maxX =
        cam.bounds?.right === false
          ? (viewportWidth - mapSize.width) / 2
          : Math.max(minX, mapSize.width - viewportWidth);

      const minY = cam.bounds?.top === false ? -(viewportHeight - mapSize.height) / 2 : 0;
      const maxY =
        cam.bounds?.bottom === false
          ? (viewportHeight - mapSize.height) / 2
          : Math.max(minY, mapSize.height - viewportHeight);

      cam.bounds = {
        minX,
        minY,
        maxX,
        maxY,
        left: cam.bounds?.left ?? true,
        right: cam.bounds?.right ?? true,
        top: cam.bounds?.top ?? true,
        bottom: cam.bounds?.bottom ?? true,
      };
    }
  }, [mapSize, windowWidth, windowHeight]);

  return (
    <EcsContext.Provider value={ecsRef.current}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}
      />
      {children}
    </EcsContext.Provider>
  );
};

export default World;
