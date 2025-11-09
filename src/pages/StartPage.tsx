import type { FC } from 'react';
import useGameState from '../game/GameState/useGameState.ts';

type StartPageProps = {
  onStart: () => void;
};

const StartPage: FC<StartPageProps> = ({ onStart }) => {
  const { reset } = useGameState();

  const handleClick = () => {
    reset();
    onStart();
  };

  return (
    <div>
      <h1>Platformer</h1>
      <button onClick={handleClick}>start game</button>
    </div>
  );
};

export default StartPage;
