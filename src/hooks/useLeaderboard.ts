import useLocalStorage from './useLocalStorage.ts';
import { useCallback } from 'react';

/**
 * Represents a single leaderboard record.
 */
export interface LeaderboardEntry {
  /** Player name (unique identifier). */
  name: string;

  /** Highest recorded score for the player. */
  score: number;

  /** Timestamp (in milliseconds since epoch) of when the score was achieved. */
  date: number;
}

/**
 * React hook for managing a persistent leaderboard stored in localStorage.
 *
 * Scores are stored under the `leaderboard` key and sorted in descending order.
 * If a player already exists, their score is only updated if the new score is higher.
 *
 * @returns An object containing:
 * - `leaderboard`: Sorted leaderboard entries.
 * - `saveScore`: Function to add or update a player's score.
 * - `clear`: Function to reset the leaderboard.
 *
 * @example
 * const { leaderboard, saveScore, clear } = useLeaderboard();
 * saveScore('Alice', 100);
 */
export function useLeaderboard() {
  const [leaderboard, setLeaderboard] = useLocalStorage<LeaderboardEntry[]>('leaderboard', []);

  /**
   * Saves or updates a player's score.
   *
   * If the player already exists, their score will only be updated
   * if the new score is higher than the existing one.
   *
   * @param name - Player name.
   * @param score - Player score.
   */
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

  /**
   * Clears all leaderboard entries.
   */
  const clear = useCallback(() => {
    setLeaderboard([]);
  }, [setLeaderboard]);

  return {
    leaderboard,
    saveScore,
    clear,
  };
}
