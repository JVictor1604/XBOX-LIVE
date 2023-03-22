import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import './App.css';
import Router from "./router"
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;