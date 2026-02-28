import { createContext } from 'react';

/**
 * React context storing the current entity id.
 *
 * Provided by Entity and consumed by child ECS wrapper components.
 */
const EntityContext = createContext<symbol | null>(null);

export default EntityContext;
