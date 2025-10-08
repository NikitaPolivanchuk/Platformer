import { createContext } from 'react';

const EntityContext = createContext<symbol | null>(null);

export default EntityContext;
