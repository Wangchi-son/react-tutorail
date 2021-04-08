import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';

ReactDOM.render(
  <React.StrictMode>
    <Hello name="react" isSpecial />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
