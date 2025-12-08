import { type FC, type ReactNode, useEffect, useMemo } from 'react';
import FirstLevel from '../game/levels/First';
import useGameState from '../game/contexts/GameState/useGameState.ts';
import HUD from '../components/HUD';
import SecondLevel from '../game/levels/Second';
import PauseModal from '../components/modals/PauseModal.tsx';
import EndGameModal from '../components/modals/EndGameModal.tsx';
import useKeyPress from '../hooks/useKeyPress.ts';
import { useParams } from 'react-router';
import { useLeaderboard } from '../hooks/useLeaderboard.ts';

const Game: FC = () => {
  const { level, score, lives, setPaused, paused, worldVersion } = useGameState();
  const keyPress = useKeyPress(['Escape']);
  const { name } = useParams();
  const { saveScore } = useLeaderboard();

  useEffect(() => {
    if (keyPress) {
      setPaused((prev) => !prev);
    }
  }, [keyPress, setPaused]);

  useEffect(() => {
    if (level > 2 || lives < 1) {
      setPaused(true);
      if (name) {
        saveScore(name, score);
      }
    }
  }, [level, lives, name, saveScore, score, setPaused]);

  const levels = useMemo<Record<number, ReactNode>>(
    () => ({
      1: <FirstLevel />,
      2: <SecondLevel />,
    }),
    [worldVersion],
  );

  return (
    <div className="relative w-full h-full bg-neutral-900 text-gray-100">
      {levels[level]}
      <button
        onClick={() => setPaused(true)}
        className="
            px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold
            rounded-md shadow-md transition absolute top-4 right-4
          "
      >
        Pause
      </button>
      <div className="absolute left-4 top-4">
        <HUD />
      </div>

      {paused && lives > 0 && level <= 2 && <PauseModal />}
      {paused && (level > 2 || lives < 1) && (
        <EndGameModal title={level > 2 ? 'Game Finished' : 'You Died'} />
      )}
    </div>
  );
};

export default Game;
