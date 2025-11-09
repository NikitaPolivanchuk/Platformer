import type { FC, ReactNode } from 'react';
import FirstLevel from '../game/levels/First';
import useGameState from '../game/GameState/useGameState.ts';
import HUD from '../components/HUD';
import SecondLevel from '../game/levels/Second';

const levels: Record<number, ReactNode> = {
  1: <FirstLevel />,
  2: <SecondLevel />,
};

type GamePageProps = {
  onFinish: () => void;
};

const GamePage: FC<GamePageProps> = ({ onFinish }) => {
  const { level, lives } = useGameState();

  if (level > 2 || lives < 1) {
    onFinish();
  }

  return (
    <div>
      <div style={{ position: 'absolute', zIndex: 1000 }}>
        <button onClick={onFinish}>finish</button>
        <HUD />
      </div>
      {levels[level]}
    </div>
  );
};

export default GamePage;
