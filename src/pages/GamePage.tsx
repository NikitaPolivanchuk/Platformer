import GameCanvas from '../core/GameCanvas';
import type { FC } from 'react';
import HUD from '../components/HUD';
import GameState from '../core/GameState';
import LevelRenderer from '../core/LevelRenderer';
import levels from '../levels';
import Background from '../entities/Background';
import bg from '@assets/bg.png';

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
          <Background
            position={{ x: -400, y: -200 }}
            size={{ width: 1920, height: 1080 }}
            src={bg}
          />
          <LevelRenderer levels={levels} />
        </GameCanvas>
      </GameState>
    </div>
  );
};

export default GamePage;
