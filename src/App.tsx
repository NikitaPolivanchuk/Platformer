import { useState } from 'react';
import StartPage from './pages/StartPage.tsx';
import GamePage from './pages/GamePage.tsx';
import ResultPage from './pages/ResultPage.tsx';
import GameState from './game/GameState';

function App() {
  const [page, setPage] = useState<'start' | 'game' | 'result'>('game');

  return (
    <GameState>
      {page === 'start' && <StartPage onStart={() => setPage('game')} />}
      {page === 'game' && <GamePage onFinish={() => setPage('result')} />}
      {page === 'result' && <ResultPage onRestart={() => setPage('start')} />}
    </GameState>
  );
}

export default App;
