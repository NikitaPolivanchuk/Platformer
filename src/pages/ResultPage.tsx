import type { FC } from 'react';

type ResultPageProps = {
  onRestart: () => void;
};

const ResultPage: FC<ResultPageProps> = ({ onRestart }) => {
  return (
    <div>
      <h1>Game completed</h1>
      <div>stats:</div>
      <div>coins collected: 0</div>
      <div>levels completed: 0</div>
      <button onClick={onRestart}>restart</button>
    </div>
  );
};

export default ResultPage;
