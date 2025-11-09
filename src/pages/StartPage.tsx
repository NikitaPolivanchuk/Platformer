import type { FC } from 'react';
import useGameState from '../game/GameState/useGameState.ts';
import { LIVES_COUNT } from '../game/constants.ts';

type StartPageProps = {
  onStart: () => void;
};

const StartPage: FC<StartPageProps> = ({ onStart }) => {
  const { setLevel, setScore, setLives } = useGameState();

  const handleClick = () => {
    setScore(0);
    setLevel(1);
    setLives(LIVES_COUNT);

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
