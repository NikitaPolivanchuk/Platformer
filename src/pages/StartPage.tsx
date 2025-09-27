import type { FC } from 'react';

type StartPageProps = {
  onStart: () => void;
};

const StartPage: FC<StartPageProps> = ({ onStart }) => {
  return (
    <div>
      <h1>Platformer</h1>
      <button onClick={onStart}>start game</button>
    </div>
  );
};

export default StartPage;
