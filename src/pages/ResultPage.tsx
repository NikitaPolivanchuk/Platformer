import type { FC } from 'react';
import useGameState from '../game/GameState/useGameState.ts';

type ResultPageProps = {
  onRestart: () => void;
};

const ResultPage: FC<ResultPageProps> = ({ onRestart }) => {
  const { score, level } = useGameState();

  return (
    <div>
      <h1>Game completed</h1>
      <div>stats:</div>
      <div>Score: {score}</div>
      <div>Levels completed: {level - 1}</div>
      <button onClick={onRestart}>restart</button>
    </div>
  );
};

export default ResultPage;
