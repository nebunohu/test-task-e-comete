import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import './index.css';

const renderTarget = document.getElementById("root");
render(<App />, renderTarget);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
