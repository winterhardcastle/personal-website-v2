import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material";

const Theme = createTheme({
   palette: {
    primary:{
        main: "#7B7554"
    },
    secondary: {
        main: "#BA5624",
    }
   } 
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={Theme}>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  </ThemeProvider >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
