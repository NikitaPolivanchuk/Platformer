import Game from './core/Game';
import Player from './entities/Player';

function App() {
  return (
    <Game>
      <Player position={{ x: 100, y: 100 }} />
    </Game>
  );
}

export default App;
