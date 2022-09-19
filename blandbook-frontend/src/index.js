

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorkerRegistration';
import actionCable from 'actioncable';

import Homepage from './components/Homepage';

const CableApp = {}

CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();