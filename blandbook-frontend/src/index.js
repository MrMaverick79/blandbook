import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorkerRegistration';
import actionCable from 'actioncable';

const CableApp = {}

CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App cableApp={CableApp}/>);

serviceWorker.unregister()
