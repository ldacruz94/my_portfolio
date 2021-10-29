import React from 'react';
import ReactDOM from 'react-dom';
import './js/index.css';
import App from './js/App';
import reportWebVitals from './reportWebVitals';
import './i18n/config';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
