import { keybindsSchema } from './keybindsSchema.ts';
import { variablesSchema } from './variablesSchema.ts';
import { z } from 'zod';

export const gameOptionsSchema = z.object({
  keybinds: keybindsSchema,
  variables: variablesSchema,
});
