import { type FC, useLayoutEffect } from 'react';
import useEcs from '../ecs/useEcs.ts';
import type BackgroundComponent from '../components/BackgroundComponent.ts';

/**
 * Props for {@link Background}.
 */
export interface BackgroundProps {
  /** CSS color string. */
  color: string;
}

/**
 * Registers a global background component.
 */
const Background: FC<BackgroundProps> = ({ color }) => {
  const ecs = useEcs();

  useLayoutEffect(() => {
    const id = Symbol('background');

    ecs.addComponent<BackgroundComponent>(id, 'background', { color });

    return () => ecs.removeComponent(id, 'background');
  }, [color, ecs]);

  return null;
};

export default Background;
