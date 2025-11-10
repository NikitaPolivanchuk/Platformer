import type { FC } from 'react';
import ModalBase from './ModalBase';
import useGameState from '../../game/contexts/GameState/useGameState.ts';

interface EndGameModalProps {
  title: string;
  onResults: () => void;
}

const EndGameModal: FC<EndGameModalProps> = ({ title, onResults }) => {
  const { score, level, reset } = useGameState();

  return (
    <ModalBase open>
      <h1>{title}</h1>
      <div>Score: {score}</div>
      <div>Levels completed: {level - 1}</div>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={reset}>Reset</button>
        <button onClick={onResults}>Results</button>
      </div>
    </ModalBase>
  );
};

export default EndGameModal;
