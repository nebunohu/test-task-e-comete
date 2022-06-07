import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseName = process.env.NODE_ENV !== 'development' ? '/test-task-e-comete' : '/';

const renderTarget = document.getElementById('root');
render(
  <Router basename={baseName}>
    <App />
  </Router>,
  renderTarget,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
