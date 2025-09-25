import { useEffect, useState } from 'react';

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
