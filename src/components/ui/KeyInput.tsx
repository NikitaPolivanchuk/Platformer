import { type FC, useEffect, useState } from 'react';

const toLabel = (key: string) => {
  return key === ' ' ? 'Space' : key;
};

/**
 * Props for {@link KeyInput}.
 */
export interface KeyInputProps {
  /**
   * Currently assigned key value.
   */
  value: string;

  /**
   * Callback invoked when a new key is selected.
   */
  onChange: (key: string) => void;
}

/**
 * Interactive key binding input component.
 *
 * When clicked, enters "listening" mode and captures
 * the next pressed keyboard key. The selected key
 * is passed to `onChange`.
 *
 * Prevents default browser behavior while listening.
 */
const KeyInput: FC<KeyInputProps> = ({ value, onChange }) => {
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (!listening) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      onChange(e.key);
      setListening(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [listening, onChange]);

  return (
    <button
      type="button"
      onClick={() => setListening(true)}
      className={`
        px-3 py-1 rounded-md text-sm font-medium w-full text-left
        transition border bg-neutral-700 text-gray-100
        hover:bg-neutral-600
        ${listening ? 'border-blue-400 shadow-lg shadow-blue-500/30' : 'border-neutral-600'}
      `}
    >
      {listening ? 'Press a key...' : toLabel(value) || 'Unassigned'}
    </button>
  );
};

export default KeyInput;
