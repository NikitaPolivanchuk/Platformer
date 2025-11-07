import type { ComponentType, FC } from 'react';
import type { Vector } from './types.ts';

interface TileData {
  id: string;
  x: number;
  y: number;
}

interface LevelData {
  tileSize: number;
  tiles: TileData[];
}

interface LevelBuilderProps {
  levelData: LevelData;
  resolver: Record<
    string,
    { Component: ComponentType<{ position: Vector; type: number }>; type: number }
  >;
}

const LevelBuilder: FC<LevelBuilderProps> = ({ levelData, resolver }) => {
  return (
    <>
      {levelData.tiles.map((tile, i) => {
        const def = resolver[tile.id];
        if (!def) return null;

        const { Component, type } = def;

        return (
          <Component
            key={i}
            position={{
              x: tile.x * levelData.tileSize,
              y: tile.y * levelData.tileSize,
            }}
            type={type}
          />
        );
      })}
    </>
  );
};

export default LevelBuilder;
