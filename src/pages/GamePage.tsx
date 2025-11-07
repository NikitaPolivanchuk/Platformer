import type { FC, ReactNode } from 'react';
import FirstLevel from '../game/levels/First';
import useGameState from '../game/GameState/useGameState.ts';
import HUD from '../components/HUD';

const levels: Record<number, ReactNode> = {
  1: <FirstLevel />,
};

type GamePageProps = {
  onFinish: () => void;
};

const GamePage: FC<GamePageProps> = ({ onFinish }) => {
  const { level } = useGameState();

  return (
    <div>
      <button onClick={onFinish}>finish</button>
      <HUD />
      {levels[level]}
    </div>
  );
};

export default GamePage;
