import { useGameOptions } from './gameOptions.ts';
import { create } from 'zustand';

interface GameState {
  level: number;
  score: number;
  lives: number;
  paused: boolean;
  worldVersion: number;

  update: (patch: Partial<GameState>) => void;
  reset: () => void;
}

export const useGameState = create<GameState>((set, get) => {
  const { options } = useGameOptions.getState();
  return {
    level: 1,
    score: 0,
    lives: options.variables.lives,
    paused: false,
    worldVersion: 0,

    update: (patch) => set(patch),

    reset: () => {
      set({
        level: 1,
        score: 0,
        lives: options.variables.lives,
        paused: false,
        worldVersion: get().worldVersion + 1,
      });
    },
  };
});
