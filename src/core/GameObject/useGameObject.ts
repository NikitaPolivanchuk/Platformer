import { useContext } from 'react';
import GameObjectContext from './GameObjectContext.ts';

const useGameObject = () => {
  const ctx = useContext(GameObjectContext);
  if (!ctx) {
    throw new Error('useGameObject must be used inside a GameObject');
  }
  return ctx;
};

export default useGameObject;
