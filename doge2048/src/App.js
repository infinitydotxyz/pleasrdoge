import './App.css';
import './style/main.css';
import './js/animframe_polyfill.js';
import './js/application.js';
import { Provider } from './Context';

import { MainContent } from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Provider>
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
        </div>
      </Provider>
    </div>
  );
}

export default App;
