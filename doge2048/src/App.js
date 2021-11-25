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
          textTransform: 'none',
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
            <MainContent />
          </div>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
