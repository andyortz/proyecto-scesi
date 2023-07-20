import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme} from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'ligth',
    background: {
      default: "#c7bebe"
    },
    primary: {
      main: '#af1e1e',
    },
    secondary: {
      main: '#e39e0d',
    },
    error: {
      main: '#00f7ed',
    },
    type: 'dark',
    primary: {
      main: '#af1e1e',
    },
    secondary: {
      main: '#e39e0d',
    },
    error: {
      main: '#00f7ed',
    },
  },

});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);