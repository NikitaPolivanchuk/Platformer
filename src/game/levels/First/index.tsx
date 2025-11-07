import type { FC } from 'react';
import World from '../../World.tsx';
import Background from '../../wrappers/Background.tsx';
import Camera from '../../wrappers/Camera.tsx';
import Player from '../../entities/Player';
import LevelBuilder from '../../LevelBuilder.tsx';
import LongPlatform from '../../entities/LongPlatform.tsx';
import SmoothWall from '../../entities/SmoothWall.tsx';
import Wall from '../../entities/Wall.tsx';
import Spike from '../../entities/Spike.tsx';
import Platform from '../../entities/Platform.tsx';
import Ladder from '../../entities/Ladder.tsx';
import data from './data.json';

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

  '19': { Component: Ladder, type: 0 },
};

const First: FC = () => (
  <World>
    <Background color={'#1b1919'} />

    <Camera
      target={Symbol.for('player')}
      lerp={0.1}
      zoom={1}
      bounds={{ minX: 0, minY: -400, maxX: 1000, maxY: 96 }}
    />

    <Player position={{ x: 100, y: 550 }} />

    <LevelBuilder levelData={data} resolver={resolver} />

    <LongPlatform
      position={{ x: 600, y: 760 }}
      points={[
        { x: 400, y: 760 },
        { x: 900, y: 760 },
      ]}
      speed={100}
    />
  </World>
);

export default First;
