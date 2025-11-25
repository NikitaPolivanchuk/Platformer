import { z } from 'zod';
import { keybindsSchema } from './schemas/keybindsSchema.ts';
import { variablesSchema } from './schemas/variablesSchema.ts';

export const gameOptionsSchema = z.object({
  keybinds: keybindsSchema,
  variables: variablesSchema,
});

export type GameOptions = z.infer<typeof gameOptionsSchema>;
