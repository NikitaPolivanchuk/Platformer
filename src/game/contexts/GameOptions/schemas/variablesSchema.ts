import { z } from 'zod';

export const variablesSchema = z.object({
  speed: z.number().min(1),
  gravity: z.number().min(1),
  jump: z.number().min(1),
  coinValue: z.number().min(1),
});
