import { z } from 'zod';
import { keybindsSchema } from './schemas/keybindsSchema.ts';
import { generalSchema } from './schemas/generalSchema.ts';
import { variablesSchema } from './schemas/variablesSchema.ts';

export const gameOptionsSchema = z.object({
  general: generalSchema,
  keybinds: keybindsSchema,
  variables: variablesSchema,
});

export type GameOptions = z.infer<typeof gameOptionsSchema>;
