import { z } from 'zod';
import type { gameOptionsSchema } from '../schemas/gameOptionsSchema.ts';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type GameOptions = z.infer<typeof gameOptionsSchema>;

export const defaultGameOptions: GameOptions = {
  keybinds: {
    up: 'w',
    down: 's',
    left: 'a',
    right: 'd',
    jump: ' ',
  },
  variables: {
    lives: 3,
    speed: 220,
    gravity: 600,
    jump: 400,
    coinValue: 200,
  },
};

export interface GameOptionsState {
  options: GameOptions;
  setOptions: (options: GameOptions) => void;
}

export const useGameOptions = create<GameOptionsState>()(
  persist(
    (set) => ({
      options: defaultGameOptions,
      setOptions: (options) => set({ options }),
    }),
    {
      name: 'options',
    },
  ),
);
