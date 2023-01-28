import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
root.render(<App />);