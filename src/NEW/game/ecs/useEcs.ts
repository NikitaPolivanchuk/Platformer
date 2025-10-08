import { useContext } from 'react';
import EcsContext from './EcsContext.ts';

const useEcs = () => {
  const ecs = useContext(EcsContext);
  if (!ecs) {
    throw new Error('useEcs must be within the World.');
  }
  return ecs;
};

export default useEcs;
