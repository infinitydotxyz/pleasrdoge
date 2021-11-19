import "./App.css";
import "./js/game_manager.js";
import "./js/animframe_polyfill.js";
import "./js/keyboard_input_manager.js";
import "./js/html_actuator.js";
import "./js/grid.js";
import "./js/tile.js";
import "./js/local_score_manager.js";
import "./js/application.js";
import "./style/main.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1 className="title">
            DOGE<span style={{ color: "red" }}>2</span>
            <span style={{ color: "#00FF00" }}>0</span>
            <span style={{ color: "blue" }}>4</span>
            <span style={{ color: "#00FFFF" }}>8</span>
          </h1>
          <div className="scores-container">
            <div className="score-container">0</div>
            <div className="best-container">0</div>
          </div>
        </div>

        <div className="game-container">
          <div className="doge-says">
            <p></p>
          </div>
          <div className="info">
            <p>
              Use your arrow keys or swipe to combine similar Doges and score
              points!{" "}
            </p>
            <p>Unlock all 11 doges to win!</p>
            <p>
              {" "}
              Doge-ified by{" "}
              <a href="http://tinymammals.com" target="_blank" rel="noreferrer">
                Tiny Mammals.
              </a>
            </p>
            <p>
              {" "}
              2048 Created by{" "}
              <a
                href="http://gabrielecirulli.com"
                target="_blank"
                rel="noreferrer"
              >
                Gabriele Cirulli.
              </a>
            </p>
            <p>
              Based on{" "}
              <a
                href="https://itunes.apple.com/us/app/1024!/id823499224"
                target="_blank"
                rel="noreferrer"
              >
                1024 by Veewo Studio
              </a>
              and conceptually similar to{" "}
              <a
                href="http://asherv.com/threes/"
                target="_blank"
                rel="noreferrer"
              >
                Threes by Asher Vollmer.
              </a>
            </p>
          </div>
          <div className="game-message">
            <p></p>
            <div className="lower">
              <div className="keep-playing-button btn">Keep going</div>
              <div className="retry-button btn">Try again</div>
            </div>
          </div>

          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
            </div>
            <div className="grid-row">
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
            </div>
            <div className="grid-row">
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
            </div>
            <div className="grid-row">
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
            </div>
          </div>

          <div className="tile-container"></div>
        </div>
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
