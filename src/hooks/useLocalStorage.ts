import { useCallback, useEffect, useState } from 'react';

/**
 * React hook that synchronizes state with `window.localStorage`.
 *
 * @typeParam T - Type of the stored value.
 * @param key - The localStorage key.
 * @param initialValue - Default value used if no value exists in storage
 * or if parsing fails.
 *
 * @returns A tuple containing:
 * - The current stored value.
 * - A setter function that updates both state and localStorage.
 *
 * @example
 * const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
 */
const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] => {
  const [stored, setStored] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(stored));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, stored]);

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStored((prev) => {
        const valueToStore = value instanceof Function ? value(prev) : value;

        try {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
          console.warn(`Error setting localStorage key "${key}":`, error);
        }

        return valueToStore;
      });
    },
    [key],
  );

  return [stored, setValue];
};

export default useLocalStorage;
