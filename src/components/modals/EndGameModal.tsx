import type { FC } from 'react';
import ModalBase from './ModalBase';
import useGameState from '../../game/contexts/GameState/useGameState.ts';
import { useNavigate, useParams } from 'react-router-dom';

interface EndGameModalProps {
  title: string;
}

const EndGameModal: FC<EndGameModalProps> = ({ title }) => {
  const { score, level, reset } = useGameState();
  const navigate = useNavigate();
  const { name } = useParams();

  return (
    <ModalBase open>
      <h1>{title}</h1>
      <div>Score: {score}</div>
      <div>Levels completed: {level - 1}</div>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={reset}>Reset</button>
        <button onClick={() => void navigate(`/leaderboard/${name}`)}>Leaderboard</button>
      </div>
    </ModalBase>
  );
};

export default EndGameModal;
