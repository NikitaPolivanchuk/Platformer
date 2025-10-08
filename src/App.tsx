// import { useState } from 'react';
// import StartPage from './pages/StartPage.tsx';
// import GamePage from './pages/GamePage.tsx';
// import ResultPage from './pages/ResultPage.tsx';
import World from './NEW/game/World.tsx';
import Entity from './NEW/game/base/Entity';
import Sprite from './NEW/game/base/Sprite.tsx';
import Collider from './NEW/game/base/Collider.tsx';
import Player from './NEW/game/entities/Player';
import Camera from './NEW/game/base/Camera.tsx';
import block from '@assets/wall.png';

function App() {
  // const [page, setPage] = useState<'start' | 'game' | 'result'>('game');

  return (
    <>
      {/*{page === 'start' && <StartPage onStart={() => setPage('game')} />}*/}
      {/*{page === 'game' && <GamePage onFinish={() => setPage('result')} />}*/}
      {/*{page === 'result' && <ResultPage onRestart={() => setPage('start')} />}*/}
      <World>
        <Camera
          target={Symbol.for('player')}
          lerp={0.8}
          zoom={1}
          bounds={{ minX: 0, minY: 0, maxX: 200, maxY: 1000 }}
        />
        <Player position={{ x: 100, y: 100 }} />

        <Entity position={{ x: 100, y: 500 }}>
          <Collider size={{ width: 4800, height: 48 }} />
          <Sprite src={block} size={{ width: 48, height: 48 }} />
        </Entity>
      </World>
    </>
  );
}

export default App;
