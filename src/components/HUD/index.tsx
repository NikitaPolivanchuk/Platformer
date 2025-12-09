import type { FC } from 'react';
import { useGameState } from '../../store/gameState.ts';

const HUD: FC = () => {
  const { level, lives, score } = useGameState();

  return (
    <div
      className={
        'bg-neutral-800 bg-opacity-60 text-white p-2 rounded-md shadow-sm flex flex-col space-y-1 text-sm font-medium'
      }
    >
      <div>
        Level: <span className="font-bold">{level}</span>
      </div>
      <div>
        Lives: <span className="font-bold">{lives}</span>
      </div>
      <div>
        Score: <span className="font-bold">{score}</span>
      </div>
    </div>
  );
};

export default HUD;
