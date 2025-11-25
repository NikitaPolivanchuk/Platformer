import type { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLeaderboard } from '../hooks/useLeaderboard.ts';

const Leaderboard: FC = () => {
  const { name } = useParams();
  const { leaderboard } = useLeaderboard();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>

      <button
        onClick={() => void navigate('/')}
        className="mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition"
      >
        Home
      </button>

      <div className="w-full max-w-2xl bg-neutral-800 rounded-lg shadow-xl overflow-hidden border border-neutral-700">
        <table className="w-full table-auto">
          <thead className="bg-neutral-700 text-gray-200">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Rank</th>
              <th className="px-4 py-2 text-left font-semibold">Name</th>
              <th className="px-4 py-2 text-left font-semibold">Score</th>
            </tr>
          </thead>

          <tbody>
            {leaderboard.map((entry, index) => {
              const isYou = entry.name === name;

              return (
                <tr
                  key={entry.name}
                  className={`
                    border-t border-neutral-700 
                    ${isYou ? 'bg-blue-900/40 text-blue-300 font-semibold shadow-inner' : 'odd:bg-neutral-800 even:bg-neutral-850'}
                    hover:bg-neutral-700/40 transition
                  `}
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
