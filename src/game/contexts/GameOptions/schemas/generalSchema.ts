import { z } from 'zod';

export const generalSchema = z.object({
  lives: z.number().int().min(1),
});
