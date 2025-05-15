import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Clear any existing theme from localStorage
localStorage.removeItem('theme');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
