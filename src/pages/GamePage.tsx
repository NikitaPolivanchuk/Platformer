import { type FC, type ReactNode, useEffect, useMemo } from 'react';
import FirstLevel from '../game/levels/First';
import useGameState from '../game/GameState/useGameState.ts';
import HUD from '../components/HUD';
import SecondLevel from '../game/levels/Second';
import PauseModal from '../components/PauseModal.tsx';
import EndGameModal from '../components/EndGameModal.tsx';
import useKeyPress from '../hooks/useKeyPress.ts';

type GamePageProps = {
  onFinish: () => void;
};

const GamePage: FC<GamePageProps> = ({ onFinish }) => {
  const { level, lives, setPaused, paused, worldVersion } = useGameState();
  const keyPress = useKeyPress(['Escape']);

  if (keyPress) {
    setPaused((prev) => !prev);
  }

  useEffect(() => {
    if (level > 2 || lives < 1) {
      setPaused(true);
    }
  }, [level, lives, setPaused]);

  const levels = useMemo<Record<number, ReactNode>>(
    () => ({
      1: <FirstLevel />,
      2: <SecondLevel />,
    }),
    [worldVersion],
  );

  return (
    <div>
      {levels[level]}
      <div style={{ position: 'absolute' }}>
        <button onClick={() => setPaused(true)}>pause</button>
        <HUD />
      </div>
      {paused && lives > 0 && level <= 2 && <PauseModal />}
      {paused && (level > 2 || lives < 1) && (
        <EndGameModal title={level > 2 ? 'Game Finished' : 'You Died'} onResults={onFinish} />
      )}
    </div>
  );
};

export default GamePage;
