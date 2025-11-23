import type { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLeaderboard } from '../hooks/useLeaderboard.ts';

const Leaderboard: FC = () => {
  const { name } = useParams();
  const { leaderboard } = useLeaderboard();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Leaderboard</h1>
      <button onClick={() => void navigate('/')}>Home</button>
      <table>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={entry.name} style={{ fontWeight: entry.name === name ? 'bold' : 'normal' }}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
