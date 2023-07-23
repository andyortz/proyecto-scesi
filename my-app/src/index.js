import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import { BrowserRouter } from "react-router-dom";
const theme = createTheme({
  palette: {
    type: 'ligth',
    background: {
      default: "#f1f1f1"
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
  },

});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline>
        <App/>
      </CssBaseline>
    </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);