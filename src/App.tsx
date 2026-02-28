import { type FC } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import Start from './pages/Start.tsx';
import Game from './pages/Game.tsx';
import Leaderboard from './pages/Leaderboard.tsx';
import CookieConsentModal from './components/modals/CookieConsentModal.tsx';

const App: FC = () => (
  <>
    <CookieConsentModal />
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/game/:name" element={<Game />} />
      <Route path="/leaderboard/:name" element={<Leaderboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);

export default App;
