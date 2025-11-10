import type { FC } from 'react';
import useGameState from '../game/contexts/GameState/useGameState.ts';
import KeybindSettingsForm from '../components/forms/KeybindSettingsForm.tsx';
import GeneralSettingsForm from '../components/forms/GeneralSettingsForm.tsx';
import VariableSettingsForm from '../components/forms/VariableSettingsForm.tsx';

type StartPageProps = {
  onStart: () => void;
};

const StartPage: FC<StartPageProps> = ({ onStart }) => {
  const { reset } = useGameState();

  const handleClick = () => {
    reset();
    onStart();
  };

  return (
    <div>
      <h1>Platformer</h1>
      <button onClick={handleClick}>start game</button>
      <GeneralSettingsForm />
      <KeybindSettingsForm />
      <VariableSettingsForm />
    </div>
  );
};

export default StartPage;
