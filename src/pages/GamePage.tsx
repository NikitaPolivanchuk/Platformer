import GameCanvas from '../core/GameCanvas';
import Player from '../entities/Player';
import type { FC } from 'react';
import HUD from '../components/HUD';
import GameState from '../core/GameState';
import SmoothWall from '../entities/SmoothWall';
import Coin from '../entities/Coin';
import Platform from '../entities/Platform';

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

          <SmoothWall position={{ x: 64, y: 200 }} type={0} />
          <SmoothWall position={{ x: 128, y: 200 }} type={1} />
          <SmoothWall position={{ x: 192, y: 200 }} type={2} />
          <SmoothWall position={{ x: 64, y: 264 }} type={6} />
          <SmoothWall position={{ x: 128, y: 264 }} type={7} />
          <SmoothWall position={{ x: 192, y: 264 }} type={8} />

          <Coin position={{ x: 150, y: 170 }} />
          <Coin position={{ x: 180, y: 170 }} />
          <Coin position={{ x: 210, y: 170 }} />

          <Platform position={{ x: 256, y: 200 }} type={0} />
          <Platform position={{ x: 304, y: 200 }} type={1} />
          <Platform position={{ x: 256, y: 280 }} type={0} />
          <Platform position={{ x: 304, y: 280 }} type={1} />
          <Platform position={{ x: 352, y: 280 }} type={2} />
        </GameCanvas>
      </GameState>
    </div>
  );
};

export default GamePage;
