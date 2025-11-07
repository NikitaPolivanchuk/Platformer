import type { FC } from 'react';
import useGameState from '../../game/GameState/useGameState.ts';

const HUD: FC = () => {
  const { level, lives, score } = useGameState();

  return (
    <div>
      <div>Level: {level}</div>
      <div>Lives: {lives}</div>
      <div>Score: {score}</div>
    </div>
  );
};

export default HUD;
