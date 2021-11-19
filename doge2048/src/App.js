import './App.css';
import './js/game_manager.js';
import './js/animframe_polyfill.js';
import './js/keyboard_input_manager.js';
import './js/html_actuator.js';
import './js/grid.js';
import './js/tile.js';
import './js/local_score_manager.js';
import './js/application.js';
import './style/main.css';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1 className="title">
            <span>DOGE</span>
            <span style={{ color: 'red' }}>2</span>
            <span style={{ color: '#00FF00' }}>0</span>
            <span style={{ color: 'blue' }}>4</span>
            <span style={{ color: '#00FFFF' }}>8</span>
          </h1>
          <div className="scores-container">
            <div className="score-container">0</div>
            <div className="best-container">0</div>
          </div>
        </div>

        <MainContent />

        <p className="game-explanation">
          Use your arrow keys or swipe to combine similar Doges and score
          points!
        </p>
        <div className="info-container">
          <div className="show-info btn">INFO</div>
        </div>
      </div>
    </div>
  );
}

export default App;
