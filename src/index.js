import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MainPage from './pages/MainPage.js';
import GlobalStyle from './components/ui/GlobalStyle.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <GlobalStyle />
    <MainPage />
  </StrictMode>
);

reportWebVitals();
