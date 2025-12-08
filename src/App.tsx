import { type FC } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import Start from './pages/Start.tsx';
import Game from './pages/Game.tsx';
import Leaderboard from './pages/Leaderboard.tsx';
import GameStateProvider from './game/contexts/GameState';
import GameOptionsProvider from './game/contexts/GameOptions';

const App: FC = () => (
  <GameOptionsProvider>
    <GameStateProvider>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game/:name" element={<Game />} />
        <Route path="/leaderboard/:name" element={<Leaderboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </GameStateProvider>
  </GameOptionsProvider>
);

export default App;
