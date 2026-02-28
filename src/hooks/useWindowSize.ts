import { useEffect, useState } from 'react';

/**
 * React hook that tracks the current browser window size.
 *
 * The hook listens to the `resize` event and updates automatically.
 *
 * @returns An object containing:
 * - `width`: Current window inner width in pixels.
 * - `height`: Current window inner height in pixels.
 *
 * @example
 * const { width, height } = useWindowSize();
 */
const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

export default useWindowSize;
