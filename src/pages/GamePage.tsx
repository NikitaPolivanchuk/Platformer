import GameCanvas from '../core/GameCanvas';
import Player from '../entities/Player';
import type { FC } from 'react';
import HUD from '../components/HUD';
import GameState from '../core/GameState';

type GamePageProps = {
  onFinish: () => void;
};

const GamePage: FC<GamePageProps> = ({ onFinish }) => {
  return (
    <div>
      <button onClick={onFinish}>finish</button>
      <GameState>
        <HUD />
        <GameCanvas>
          <Player position={{ x: 100, y: 100 }} />
        </GameCanvas>
      </GameState>
    </div>
  );
};

export default GamePage;
