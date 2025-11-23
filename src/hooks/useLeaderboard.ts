import useLocalStorage from './useLocalStorage.ts';
import { useCallback } from 'react';

export interface LeaderboardEntry {
  name: string;
  score: number;
  date: number;
}

export function useLeaderboard() {
  const [leaderboard, setLeaderboard] = useLocalStorage<LeaderboardEntry[]>('leaderboard', []);

  const saveScore = useCallback(
    (name: string, score: number) => {
      setLeaderboard((prev) => {
        const updated = [...prev];
        const existing = updated.find((e) => e.name === name);

        if (existing) {
          if (score > existing.score) {
            existing.score = score;
            existing.date = Date.now();
          }
        } else {
          updated.push({ name, score, date: Date.now() });
        }

        updated.sort((a, b) => b.score - a.score);
        return updated;
      });
    },
    [setLeaderboard],
  );

  const clear = useCallback(() => {
    setLeaderboard([]);
  }, [setLeaderboard]);

  return {
    leaderboard,
    saveScore,
    clear,
  };
}
