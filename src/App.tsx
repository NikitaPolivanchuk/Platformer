import { useState } from 'react';
import StartPage from './pages/StartPage.tsx';
import GamePage from './pages/GamePage.tsx';
import ResultPage from './pages/ResultPage.tsx';

function App() {
  const [page, setPage] = useState<'start' | 'game' | 'result'>('game');

  return (
    <>
      {page === 'start' && <StartPage onStart={() => setPage('game')} />}
      {page === 'game' && <GamePage onFinish={() => setPage('result')} />}
      {page === 'result' && <ResultPage onRestart={() => setPage('start')} />}
    </>
  );
}

export default App;
