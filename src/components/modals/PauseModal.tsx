import ModalBase from './ModalBase';
import type { FC } from 'react';
import useGameState from '../../game/contexts/GameState/useGameState.ts';

interface PauseModalProps {
  onStart: () => void;
}

const PauseModal: FC<PauseModalProps> = ({ onStart }) => {
  const { setPaused, reset } = useGameState();

  return (
    <ModalBase open onClose={() => setPaused(false)}>
      <h1>Game Paused</h1>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setPaused(false)}>Resume</button>
        <button onClick={reset}>Reset</button>
        <button onClick={onStart}>Main Menu</button>
      </div>
    </ModalBase>
  );
};

export default PauseModal;
