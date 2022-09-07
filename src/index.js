import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Message from './Message';

const root = ReactDOM.createRoot(document.getElementById('root'));
const message = ReactDOM.createRoot(document.getElementById('message'));

const myName = 'Alex';
const dateTime = Date(Date.now());
const color = 'green';

root.render(
  <React.StrictMode>
    <App nameOfProp={myName} dt={dateTime} paintColor={color} />
  </React.StrictMode>
);

message.render(
  <React.StrictMode>
  <Message myNewProp={myName} />
</React.StrictMode>
);
