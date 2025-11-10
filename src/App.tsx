import { useState } from 'react';
import StartPage from './pages/StartPage.tsx';
import GamePage from './pages/GamePage.tsx';
import ResultPage from './pages/ResultPage.tsx';
import GameStateProvider from './game/contexts/GameState';
import GameOptionsProvider from './game/contexts/GameOptions';

function App() {
  const [page, setPage] = useState<'start' | 'game' | 'result'>('start');

  return (
    <GameOptionsProvider>
      <GameStateProvider>
        {page === 'start' && <StartPage onStart={() => setPage('game')} />}
        {page === 'game' && (
          <GamePage onStart={() => setPage('start')} onFinish={() => setPage('result')} />
        )}
        {page === 'result' && <ResultPage onRestart={() => setPage('start')} />}
      </GameStateProvider>
    </GameOptionsProvider>
  );
}

export default App;
