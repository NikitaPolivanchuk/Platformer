import Modal from './Modal';
import type { FC } from 'react';
import useGameState from '../game/GameState/useGameState.ts';

const PauseModal: FC = () => {
  const { setPaused, reset } = useGameState();

  return (
    <Modal open onClose={() => setPaused(false)}>
      <h1>Game Paused</h1>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setPaused(false)}>Resume</button>
        <button onClick={reset}>Reset</button>
      </div>
    </Modal>
  );
};

export default PauseModal;
