import { type FC, useState } from 'react';
import KeybindSettingsForm from '../components/forms/KeybindSettingsForm.tsx';
import VariableSettingsForm from '../components/forms/VariableSettingsForm.tsx';
import { useNavigate } from 'react-router';
import coinGif from '@assets/coin.gif';
import skullGif from '@assets/skull.gif';
import { useGameState } from '../store/gameState.ts';

const Start: FC = () => {
  const navigate = useNavigate();
  const { reset } = useGameState();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const validateName = () => {
    if (!name.trim()) {
      setNameError('Please enter a nickname to continue.');
      return false;
    }
    setNameError('');
    return true;
  };

  const handleStart = async () => {
    if (!validateName()) return;
    reset();
    await navigate(`/game/${name}`);
  };

  const handleLeaderboard = async () => {
    if (!validateName()) return;
    await navigate(`/leaderboard/${name}`);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Platformer Game</h1>

      <div className="bg-neutral-800 p-4 rounded-lg w-full max-w-md shadow-lg mb-6">
        <p className="flex items-center gap-2 mb-2">
          <img src={coinGif} alt="coin" height="16" />
          Collect coins to gain score.
        </p>
        <p className="flex items-center gap-2 mb-2">
          <img src={skullGif} alt="skull" height="20" />
          Reach the skull to proceed to the next level.
        </p>
      </div>

      <div className="w-full max-w-md mb-4">
        <label className="block font-semibold mb-1">Nickname</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            const v = e.target.value;
            setName(v);
            if (v.trim()) setNameError('');
          }}
          className={`w-full px-3 py-2 rounded-md bg-neutral-800 text-gray-100 
            focus:outline-none border 
            ${nameError ? 'border-red-500' : 'border-neutral-700 focus:border-blue-400'}
          `}
          placeholder="Enter nickname to continue..."
        />
        {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
      </div>

      <div className="flex gap-4 w-full max-w-md mb-8">
        <button
          onClick={() => void handleStart()}
          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900
                     text-white py-2 rounded-md font-semibold transition"
          disabled={!name.trim()}
        >
          Start Game
        </button>

        <button
          onClick={() => void handleLeaderboard()}
          className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900
                     text-white py-2 rounded-md font-semibold transition"
          disabled={!name.trim()}
        >
          Leaderboard
        </button>
      </div>

      <div className="bg-neutral-800 p-4 rounded-lg w-full max-w-md shadow-md mb-6">
        <KeybindSettingsForm />
      </div>

      <div className="bg-neutral-800 p-4 rounded-lg w-full max-w-md shadow-md">
        <VariableSettingsForm />
      </div>
    </div>
  );
};

export default Start;
