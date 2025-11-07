import { useContext } from 'react';
import EntityContext from './EntityContext.ts';

const useEntity = () => {
  const ctx = useContext(EntityContext);
  if (!ctx) {
    throw new Error('useEntity must be used within the entity.');
  }
  return ctx;
};

export default useEntity;
