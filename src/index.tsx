import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // The file name is App.tsx, so we import 'App' without the extension

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);