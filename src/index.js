import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const appId = 'kmXQE57sHuXmyOYuVQx4tGV4464A3VxkdqxvZYxR';
// const serverUrl = 'https://pk6ham2gketm.usemoralis.com:2053/server';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


if (module.hot) {
  module.hot.accept();
}
