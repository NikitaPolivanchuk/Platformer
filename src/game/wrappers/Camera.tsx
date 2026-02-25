import { type FC, useLayoutEffect } from 'react';
import type { Vector } from '../types.ts';
import useEcs from '../ecs/useEcs.ts';
import type CameraComponent from '../components/CameraComponent.ts';

/**
 * Props for {@link Camera}.
 */
export interface CameraProps {
  /** Optional camera entity id. */
  id?: symbol;

  /** Entity to follow. */
  target?: symbol;

  /** Follow interpolation factor (0–1). */
  lerp?: number;

  /** Zoom level. */
  zoom?: number;

  /** Positional offset from target. */
  offset?: Vector;

  /** Optional boundary constraints. */
  bounds?: {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
  };
}

/**
 * Declarative camera component.
 *
 * Registers a CameraComponent used by rendering systems
 * to determine viewport position and scaling.
 */
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
