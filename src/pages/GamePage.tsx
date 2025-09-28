import GameCanvas from '../core/GameCanvas';
import type { FC } from 'react';
import HUD from '../components/HUD';
import GameState from '../core/GameState';
import LevelRenderer from '../core/LevelRenderer';
import { levels } from '../entities/levels.tsx';

type GamePageProps = {
  onFinish: () => void;
};

const GamePage: FC<GamePageProps> = ({ onFinish }) => {
  return (
    <div>
      <button onClick={onFinish}>finish</button>
      <GameState onGameOver={onFinish}>
        <HUD />
        <GameCanvas>
          <LevelRenderer levels={levels} />
        </GameCanvas>
      </GameState>
    </div>
  );
};

export default GamePage;
