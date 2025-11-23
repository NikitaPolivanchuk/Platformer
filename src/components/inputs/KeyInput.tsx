import { type FC, useEffect, useState } from 'react';

const toLabel = (key: string) => {
  return key === ' ' ? 'Space' : key;
};

interface KeyInputProps {
  value: string;
  onChange: (key: string) => void;
}

const KeyInput: FC<KeyInputProps> = ({ value, onChange }) => {
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (!listening) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      const key = e.key;
      onChange(key);
      setListening(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [listening, onChange]);

  return (
    <button type="button" onClick={() => setListening(true)}>
      {listening ? 'Press a key...' : toLabel(value) || 'Unassigned'}
    </button>
  );
};

export default KeyInput;
