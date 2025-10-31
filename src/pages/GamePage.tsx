import type { FC } from 'react';
import World from '../NEW/game/World.tsx';
import Camera from '../NEW/game/base/Camera.tsx';
import Player from '../NEW/game/entities/Player';
import LevelBuilder from '../NEW/game/LevelBuilder.tsx';
import level1 from '@assets/levels/1.json';
import Platform from '../NEW/game/entities/Platform.tsx';
import SmoothWall from '../NEW/game/entities/SmoothWall.tsx';
import Wall from '../NEW/game/entities/Wall.tsx';
import Background from '../NEW/game/base/Background.tsx';
import LongPlatform from '../NEW/game/entities/LongPlatform.tsx';
import Spike from '../NEW/game/entities/Spike.tsx';

const resolver = {
  '0': { Component: SmoothWall, type: 5 },
  '1': { Component: SmoothWall, type: 8 },
  '2': { Component: SmoothWall, type: 11 },
  '4': { Component: SmoothWall, type: 10 },
  '5': { Component: SmoothWall, type: 6 },
  '6': { Component: SmoothWall, type: 9 },
  '7': { Component: SmoothWall, type: 7 },
  '8': { Component: Wall, type: 12 },
  '9': { Component: Wall, type: 6 },
  '10': { Component: Wall, type: 5 },
  '11': { Component: Wall, type: 9 },
  '12': { Component: Wall, type: 4 },
  '13': { Component: Wall, type: 7 },
  '15': { Component: Wall, type: 10 },
  '16': { Component: SmoothWall, type: 4 },
  '17': { Component: SmoothWall, type: 12 },
  '21': { Component: SmoothWall, type: 3 },
  '22': { Component: SmoothWall, type: 1 },
  '29': { Component: SmoothWall, type: 2 },
  '30': { Component: SmoothWall, type: 5 },

  '3': { Component: Spike, type: 0 },
  '14': { Component: Spike, type: 1 },

  '18': { Component: Platform, type: 1 },
  '20': { Component: Platform, type: 2 },
};

type GamePageProps = {
  onFinish: () => void;
};

const GamePage: FC<GamePageProps> = ({ onFinish }) => {
  return (
    <div>
      <button onClick={onFinish}>finish</button>
      <World>
        <Background color={'#1b1919'} />

        <Camera
          target={Symbol.for('player')}
          lerp={1}
          zoom={1}
          bounds={{ minX: 0, minY: -400, maxX: 1000, maxY: 96 }}
        />

        <Player position={{ x: 100, y: 550 }} />

        <LevelBuilder levelData={level1} resolver={resolver} />

        <LongPlatform
          position={{ x: 600, y: 760 }}
          points={[
            { x: 400, y: 760 },
            { x: 900, y: 760 },
          ]}
          speed={50}
        />
      </World>
    </div>
  );
};

export default GamePage;
