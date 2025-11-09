import type { FC } from 'react';
import Modal from './Modal';
import useGameState from '../game/GameState/useGameState.ts';

interface EndGameModalProps {
  title: string;
  onResults: () => void;
}

const EndGameModal: FC<EndGameModalProps> = ({ title, onResults }) => {
  const { score, level, reset } = useGameState();

  return (
    <Modal open>
      <h1>{title}</h1>
      <div>Score: {score}</div>
      <div>Levels completed: {level - 1}</div>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={reset}>Reset</button>
        <button onClick={onResults}>Results</button>
      </div>
    </Modal>
  );
};

export default EndGameModal;
