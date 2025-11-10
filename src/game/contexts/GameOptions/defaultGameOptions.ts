import type { GameOptions } from './GameOptions.ts';

const defaultGameOptions: GameOptions = {
  general: {
    lives: 3,
  },
  keybinds: {
    up: 'w',
    down: 's',
    left: 'a',
    right: 'd',
    jump: ' ',
  },
  variables: {
    speed: 220,
    gravity: 600,
    jump: 400,
    coinValue: 200,
  },
};

export default defaultGameOptions;
