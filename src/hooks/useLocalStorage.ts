import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T) => {
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
    (value: T) => {
      setStored((prev) => {
        try {
          window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          console.warn(`Error setting localStorage key "${key}":`, error);
        }
        return prev;
      });
    },
    [key],
  );

  return [stored, setValue];
};

export default useLocalStorage;
