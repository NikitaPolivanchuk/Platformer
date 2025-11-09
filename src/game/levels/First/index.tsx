import type { FC } from 'react';
import World from '../../World.tsx';
import Background from '../../wrappers/Background.tsx';
import Camera from '../../wrappers/Camera.tsx';
import Player from '../../entities/Player';
import LevelBuilder from '../../LevelBuilder.tsx';
import PlatformLong from '../../entities/PlatformLong.tsx';
import WallSmooth from '../../entities/WallSmooth.tsx';
import Wall from '../../entities/Wall.tsx';
import Spike from '../../entities/Spike.tsx';
import Platform from '../../entities/Platform.tsx';
import Ladder from '../../entities/Ladder.tsx';
import data from './data.json';
import Skull from '../../entities/Skull.tsx';
import PlatformShort from '../../entities/PlatformShort.tsx';
import Coin from '../../entities/Coin.tsx';
import Void from '../../entities/Void.tsx';
import Entity from '../../wrappers/Entity';
import Collider from '../../wrappers/Collider.tsx';

const resolver = {
  '0': { Component: WallSmooth, type: 5 },
  '1': { Component: WallSmooth, type: 8 },
  '2': { Component: WallSmooth, type: 11 },
  '4': { Component: WallSmooth, type: 10 },
  '5': { Component: WallSmooth, type: 6 },
  '6': { Component: WallSmooth, type: 9 },
  '7': { Component: WallSmooth, type: 7 },
  '8': { Component: Wall, type: 12 },
  '9': { Component: Wall, type: 6 },
  '10': { Component: Wall, type: 5 },
  '11': { Component: Wall, type: 9 },
  '12': { Component: Wall, type: 4 },
  '13': { Component: Wall, type: 7 },
  '15': { Component: Wall, type: 10 },
  '16': { Component: WallSmooth, type: 4 },
  '17': { Component: WallSmooth, type: 12 },
  '21': { Component: WallSmooth, type: 3 },
  '22': { Component: WallSmooth, type: 1 },
  '29': { Component: WallSmooth, type: 2 },
  '30': { Component: WallSmooth, type: 2 },

  '3': { Component: Spike, type: 0 },
  '14': { Component: Spike, type: 1 },

  '18': { Component: Platform, type: 1 },
  '20': { Component: Platform, type: 2 },

  '19': { Component: Ladder, type: 0 },
};

const First: FC = () => (
  <World
    mapSize={{
      width: data.mapWidth * data.tileSize,
      height: data.mapHeight * data.tileSize,
    }}
  >
    <Background color={'#1b1919'} />

    <Camera target={Symbol.for('player')} lerp={0.1} zoom={1} bounds={{ top: false }} />

    <LevelBuilder levelData={data} resolver={resolver} />

    <Player position={{ x: 100, y: 550 }} />

    <Coin position={{ x: 360, y: 60 }} />
    <Coin position={{ x: 400, y: 60 }} />

    <Coin position={{ x: 1240, y: 320 }} />

    <Coin position={{ x: 1900, y: -50 }} />
    <Coin position={{ x: 1960, y: -50 }} />
    <Coin position={{ x: 2020, y: -50 }} />

    <Skull position={{ x: 1980, y: 650 }} />

    <PlatformLong
      position={{ x: 600, y: 760 }}
      points={[
        { x: 400, y: 760 },
        { x: 900, y: 760 },
      ]}
      speed={100}
    />
    <PlatformShort position={{ x: 350, y: 120 }} />
    <PlatformShort position={{ x: 1700, y: 750 }} />
    <PlatformShort position={{ x: 1950, y: 750 }} />

    <Void
      position={{ x: 0, y: (data.mapHeight + 2) * data.tileSize }}
      size={{ width: data.mapWidth * data.tileSize, height: 100 }}
    />

    <Entity position={{ x: -100, y: -data.tileSize * 2 }}>
      <Collider size={{ width: 100, height: (data.mapHeight + 4) * data.tileSize }} />
    </Entity>
    <Entity position={{ x: data.mapWidth * data.tileSize, y: -data.tileSize * 2 }}>
      <Collider size={{ width: 100, height: (data.mapHeight + 4) * data.tileSize }} />
    </Entity>
  </World>
);

export default First;
