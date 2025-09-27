import type { FC } from 'react';
import useGameState from '../../core/GameState/useGameState.ts';

const HUD: FC = () => {
  const { level, lives, coins } = useGameState();

  return (
    <div>
      <div>Level: {level}</div>
      <div>Lives: {lives}</div>
      <div>Coins: {coins}</div>
    </div>
  );
};

export default HUD;
