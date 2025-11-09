import { type FC, useLayoutEffect } from 'react';
import type { Vector } from '../types.ts';
import useEcs from '../ecs/useEcs.ts';
import type CameraComponent from '../components/CameraComponent.ts';

interface CameraProps {
  id?: symbol;
  target?: symbol;
  offset?: Vector;
  lerp?: number;
  zoom?: number;
  bounds?: {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
  };
}

const Camera: FC<CameraProps> = ({
  id = Symbol('camera'),
  target,
  lerp = 1,
  zoom = 1,
  offset = { x: 0, y: 0 },
  bounds,
}) => {
  const ecs = useEcs();

  useLayoutEffect(() => {
    ecs.addComponent<CameraComponent>(id, 'camera', {
      position: { x: 0, y: 0 },
      target,
      offset,
      lerp,
      zoom,
      bounds,
    });
  }, [bounds, ecs, id, lerp, offset, target, zoom]);

  return null;
};

export default Camera;
