import { z } from 'zod';

export const keybindsSchema = z
  .object({
    up: z.string().min(1, 'Key is required'),
    down: z.string().min(1, 'Key is required'),
    left: z.string().min(1, 'Key is required'),
    right: z.string().min(1, 'Key is required'),
    jump: z.string().min(1, 'Key is required'),
  })
  .superRefine((keybinds, ctx) => {
    const valuesSeen = new Map<string, string>();
    for (const [action, key] of Object.entries(keybinds)) {
      if (valuesSeen.has(key)) {
        const existing = valuesSeen.get(key)!;
        ctx.addIssue({
          code: 'custom',
          path: [action],
          message: `Duplicate key: "${key}" also used for "${existing}"`,
        });
        ctx.addIssue({
          code: 'custom',
          path: [existing],
          message: `Duplicate key: "${key}" also used for "${action}"`,
        });
      } else {
        valuesSeen.set(key, action);
      }
    }
  });
