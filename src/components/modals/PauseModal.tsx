import ModalBase from './ModalBase';
import type { FC } from 'react';
import useGameState from '../../game/contexts/GameState/useGameState.ts';
import { useNavigate } from 'react-router-dom';

const PauseModal: FC = () => {
  const { setPaused, reset } = useGameState();
  const navigate = useNavigate();

  return (
    <ModalBase open onClose={() => setPaused(false)}>
      <h1>Game Paused</h1>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setPaused(false)}>Resume</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => void navigate('/')}>Main Menu</button>
      </div>
    </ModalBase>
  );
};

export default PauseModal;
