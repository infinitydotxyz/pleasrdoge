import './App.css';
import './style/main.css';
import './js/animframe_polyfill.js';
import './js/application.js';
import { Provider } from './Context';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { MainContent } from './components/MainContent';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#BED5E4',
    },
    secondary: {
      main: '#BED5E4',
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          boxShadow: 'none',
          borderRadius: 10,
        },
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <Provider>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
