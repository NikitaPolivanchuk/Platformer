import { useContext } from 'react';
import EntityContext from './EntityContext.ts';

/**
 * Hook for retrieving the current entity id.
 *
 * Must be called inside an Entity component.
 *
 * @throws Error if used outside an Entity.
 * @returns The current entity identifier.
 */
const useEntity = () => {
  const ctx = useContext(EntityContext);
  if (!ctx) {
    throw new Error('useEntity must be used within the entity.');
  }
  return ctx;
};

export default useEntity;
