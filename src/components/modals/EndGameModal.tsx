import type { FC } from 'react';
import useGameState from '../../game/contexts/GameState/useGameState.ts';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '../ui/Modal';

interface EndGameModalProps {
  title: string;
}

const EndGameModal: FC<EndGameModalProps> = ({ title }) => {
  const { score, level, reset } = useGameState();
  const navigate = useNavigate();
  const { name } = useParams();

  return (
    <Modal open>
      <Modal.Backdrop blur="lg" opacity={60} />
      <Modal.Panel>
        <Modal.Header>{title}</Modal.Header>

        <Modal.Body>
          <div className="space-y-2">
            <div>
              Score: <span className="font-semibold">{score}</span>
            </div>
            <div>
              Levels completed: <span className="font-semibold">{level - 1}</span>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button
            onClick={reset}
            className="px-4 py-2 rounded-md bg-neutral-700 hover:bg-neutral-600 text-gray-100 font-semibold w-full sm:w-auto transition"
          >
            Play Again
          </button>

          <button
            onClick={() => void navigate(`/leaderboard/${name}`)}
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full sm:w-auto transition"
          >
            Leaderboard
          </button>
        </Modal.Footer>
      </Modal.Panel>
    </Modal>
  );
};
export default EndGameModal;
