import { createContext } from 'react';
import Ecs from './index.ts';

const EcsContext = createContext<Ecs | null>(null);

export default EcsContext;
