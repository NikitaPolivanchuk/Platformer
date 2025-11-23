import { type FC, useState } from 'react';
import useGameState from '../game/contexts/GameState/useGameState.ts';
import KeybindSettingsForm from '../components/forms/KeybindSettingsForm.tsx';
import VariableSettingsForm from '../components/forms/VariableSettingsForm.tsx';
import { useNavigate } from 'react-router-dom';
import coinGif from '@assets/coin.gif';
import skullGif from '@assets/skull.gif';

const Start: FC = () => {
  const navigate = useNavigate();
  const { reset } = useGameState();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const handleStart = async () => {
    if (!name.trim()) {
      setNameError('Name is required');
      return;
    }
    reset();
    await navigate(`/game/${name}`);
  };

  const handleLeaderboard = async () => {
    if (!name.trim()) {
      setNameError('Name is required');
      return;
    }
    await navigate(`/leaderboard/${name}`);
  };

  return (
    <div>
      <h1>Platformer Game</h1>
      <div>
        <p>
          <img src={coinGif} alt="coin" height="16px" /> Collect coins to gain score.
        </p>
        <p>
          <img src={skullGif} alt="skull" height="20px" />
          Reach the exit portal to proceed to the next level.
        </p>
        <p>Avoid traps!</p>
      </div>
      <label style={{ display: 'block' }}>
        Name
        <input
          type="text"
          value={name}
          onChange={({ target: { value } }) => {
            if (!value.trim()) {
              setNameError('Name is required');
            } else {
              setNameError('');
            }
            setName(value);
          }}
        />
      </label>
      {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
      <div>
        <button onClick={() => void handleStart()}>Start game</button>
        <button onClick={() => void handleLeaderboard()}>Leaderboard</button>
      </div>
      <KeybindSettingsForm />
      <VariableSettingsForm />
    </div>
  );
};

export default Start;
