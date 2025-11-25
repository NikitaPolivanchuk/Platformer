import type { GameOptions } from './GameOptions.ts';

const defaultGameOptions: GameOptions = {
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

export default defaultGameOptions;
