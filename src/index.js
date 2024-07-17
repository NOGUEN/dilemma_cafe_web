import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import GlobalStyle from './components/ui/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);

reportWebVitals();
