import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const chatName = 'Message Form';

root.render(
  <React.StrictMode>
    <App nameOfProp={chatName} />
  </React.StrictMode>
);

