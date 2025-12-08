import type { FC } from 'react';
import useGameState from '../../game/contexts/GameState/useGameState.ts';
import { useNavigate } from 'react-router';
import Modal from '../ui/Modal/index.ts';

const PauseModal: FC = () => {
  const { setPaused, reset } = useGameState();
  const navigate = useNavigate();

  return (
    <Modal open onClose={() => setPaused(false)}>
      <Modal.Backdrop blur="sm" opacity={50} clickBehavior="ignore" />
      <Modal.Panel>
        <Modal.Header>Game Paused</Modal.Header>

        <Modal.Footer>
          <button
            onClick={() => setPaused(false)}
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full sm:w-auto transition"
          >
            Resume
          </button>

          <button
            onClick={reset}
            className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold w-full sm:w-auto transition"
          >
            Reset Game
          </button>

          <button
            onClick={() => void navigate('/')}
            className="px-4 py-2 rounded-md bg-neutral-700 hover:bg-neutral-600 text-gray-100 font-semibold w-full sm:w-auto transition"
          >
            Main Menu
          </button>
        </Modal.Footer>
      </Modal.Panel>
    </Modal>
  );
};

export default PauseModal;
