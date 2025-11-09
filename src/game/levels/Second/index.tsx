import type { FC } from 'react';
import World from '../../World.tsx';
import Background from '../../wrappers/Background.tsx';
import Camera from '../../wrappers/Camera.tsx';
import Player from '../../entities/Player';
import LevelBuilder from '../../LevelBuilder.tsx';
import data from './data.json';
import Wall from '../../entities/Wall.tsx';
import WallSmooth from '../../entities/WallSmooth.tsx';
import Platform from '../../entities/Platform.tsx';
import Ladder from '../../entities/Ladder.tsx';
import Spike from '../../entities/Spike.tsx';
import Skull from '../../entities/Skull.tsx';
import PlatformShort from '../../entities/PlatformShort.tsx';
import Coin from '../../entities/Coin.tsx';
import PlatformLong from '../../entities/PlatformLong.tsx';
import Void from '../../entities/Void.tsx';
import Entity from '../../wrappers/Entity';
import Collider from '../../wrappers/Collider.tsx';

const resolver = {
  '0': { Component: Wall, type: 0 },
  '1': { Component: Wall, type: 1 },
  '2': { Component: Wall, type: 2 },
  '3': { Component: Wall, type: 3 },
  '4': { Component: Wall, type: 4 },
  '5': { Component: Wall, type: 5 },
  '6': { Component: Wall, type: 6 },
  '7': { Component: Wall, type: 7 },
  '8': { Component: Wall, type: 8 },
  '9': { Component: Wall, type: 9 },
  '10': { Component: Wall, type: 10 },
  '11': { Component: Wall, type: 11 },
  '12': { Component: Wall, type: 12 },

  '13': { Component: WallSmooth, type: 0 },
  '14': { Component: WallSmooth, type: 1 },
  '15': { Component: WallSmooth, type: 2 },
  '16': { Component: WallSmooth, type: 3 },
  '17': { Component: WallSmooth, type: 4 },
  '18': { Component: WallSmooth, type: 5 },
  '19': { Component: WallSmooth, type: 6 },
  '20': { Component: WallSmooth, type: 7 },
  '21': { Component: WallSmooth, type: 9 },
  '22': { Component: WallSmooth, type: 10 },
  '23': { Component: WallSmooth, type: 12 },

  '24': { Component: Platform, type: 2 },
  '25': { Component: Platform, type: 1 },
  '26': { Component: Platform, type: 0 },

  '27': { Component: Ladder, type: 0 },

  '28': { Component: Spike, type: 1 },
  '29': { Component: Spike, type: 0 },
  '30': { Component: Spike, type: 3 },
};

const Second: FC = () => (
  <World
    mapSize={{
      width: data.mapWidth * data.tileSize,
      height: data.mapHeight * data.tileSize,
    }}
  >
    <Background color={'#1b1919'} />

    <Camera target={Symbol.for('player')} lerp={0.1} zoom={1.2} />

    <Player position={{ x: 100, y: 1200 }} />

    <LevelBuilder levelData={data} resolver={resolver} />

    <Skull position={{ x: 3100, y: 1400 }} />

    <Coin position={{ x: 660, y: 900 }} />
    <Coin position={{ x: 920, y: 900 }} />

    <Coin position={{ x: 1560, y: 640 }} />

    <Coin position={{ x: 335, y: 2850 }} />
    <Coin position={{ x: 685, y: 2850 }} />

    <Coin position={{ x: 630, y: 1660 }} />
    <Coin position={{ x: 690, y: 1660 }} />
    <Coin position={{ x: 630, y: 1930 }} />
    <Coin position={{ x: 690, y: 1930 }} />

    <Coin position={{ x: 1690, y: 1330 }} />
    <Coin position={{ x: 1750, y: 1330 }} />

    <Coin position={{ x: 2680, y: 1460 }} />

    <Coin position={{ x: 1590, y: 2150 }} />
    <Coin position={{ x: 1670, y: 2150 }} />

    <PlatformShort
      position={{ x: 470, y: 2250 }}
      points={[
        { x: 470, y: 2250 },
        { x: 470, y: 2900 },
      ]}
      speed={100}
    />
    <PlatformShort position={{ x: 300, y: 2900 }} />
    <PlatformShort position={{ x: 650, y: 2900 }} />

    <PlatformLong position={{ x: 1800, y: 1740 }} />

    <PlatformShort position={{ x: 1650, y: 400 }} />
    <PlatformShort position={{ x: 2040, y: 400 }} />

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

export default Second;
