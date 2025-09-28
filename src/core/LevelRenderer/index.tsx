import useGameState from '../GameState/useGameState.ts';
import { type FC, type JSX } from 'react';

type LevelRendererProps = {
  levels: Record<string, JSX.Element>;
};

const LevelRenderer: FC<LevelRendererProps> = ({ levels }) => {
  const { level } = useGameState();
  return <>{levels[level]}</>;
};

export default LevelRenderer;
