import { type FC, type ReactNode, useEffect, useMemo } from 'react';
import FirstLevel from '../game/levels/First';
import useGameState from '../game/contexts/GameState/useGameState.ts';
import HUD from '../components/HUD';
import SecondLevel from '../game/levels/Second';
import PauseModal from '../components/modals/PauseModal.tsx';
import EndGameModal from '../components/modals/EndGameModal.tsx';
import useKeyPress from '../hooks/useKeyPress.ts';
import { useParams } from 'react-router-dom';
import { useLeaderboard } from '../hooks/useLeaderboard.ts';

const Game: FC = () => {
  const { level, score, lives, setPaused, paused, worldVersion } = useGameState();
  const keyPress = useKeyPress(['Escape']);
  const { name } = useParams();
  const { saveScore } = useLeaderboard();

  if (keyPress) {
    setPaused((prev) => !prev);
  }

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
    <div>
      {levels[level]}
      <div style={{ position: 'absolute' }}>
        <button onClick={() => setPaused(true)}>pause</button>
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
