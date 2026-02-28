import { useEffect, useState } from 'react';

/**
 * React hook that tracks whether one or more specific keyboard keys
 * are currently pressed.
 *
 * @param key - A single key (e.g. "Enter") or an array of keys to listen for.
 * @returns `true` if any of the specified keys are currently pressed, otherwise `false`.
 *
 * @example
 * const isEnterPressed = useKeyPress("Enter");
 * const isMovementKeyPressed = useKeyPress(["ArrowUp", "w"]);
 */
const useKeyPress = (key: string | string[]) => {
  const [keyPressed, setKeyPressed] = useState(false);
  const keys = Array.isArray(key) ? key : [key];

  useEffect(
    () => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!keyPressed && keys.includes(event.key)) {
          setKeyPressed(true);
        }
      };

      const handleKeyUp = (event: KeyboardEvent) => {
        if (keyPressed && keys.includes(event.key)) {
          setKeyPressed(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [keyPressed, ...keys],
  );

  return keyPressed;
};

export default useKeyPress;
