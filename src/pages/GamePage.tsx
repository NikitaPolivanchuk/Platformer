import GameCanvas from '../core/GameCanvas';
import Player from '../entities/Player';
import type { FC } from 'react';
import HUD from '../components/HUD';

type GamePageProps = {
  onFinish: () => void;
};

const GamePage: FC<GamePageProps> = ({ onFinish }) => {
  return (
    <div>
      <button onClick={onFinish}>finish</button>
      <HUD />
      <GameCanvas>
        <Player position={{ x: 100, y: 100 }} />
      </GameCanvas>
    </div>
  );
};

export default GamePage;
