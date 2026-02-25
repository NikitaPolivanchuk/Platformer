import { createContext } from 'react';
import Ecs from './index.ts';

/**
 * React context used to provide the ECS instance
 * to the component tree.
 */
const EcsContext = createContext<Ecs | null>(null);

export default EcsContext;
