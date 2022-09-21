import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorkerRegistration';
import actionCable from 'actioncable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';

const CableApp = {}

CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App cableApp={CableApp}/>);
root.render(<Homepage cableApp={CableApp}/>);

serviceWorker.unregister()
