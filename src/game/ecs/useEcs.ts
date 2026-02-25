import { useContext } from 'react';
import EcsContext from './EcsContext.ts';

/**
 * React hook for accessing the ECS instance.
 *
 * Must be used within a component wrapped by
 * an `EcsContext.Provider`.
 *
 * @throws Error if used outside the ECS provider.
 * @returns The active ECS instance.
 */
const useEcs = () => {
  const ecs = useContext(EcsContext);
  if (!ecs) {
    throw new Error('useEcs must be within the World.');
  }
  return ecs;
};

export default useEcs;
