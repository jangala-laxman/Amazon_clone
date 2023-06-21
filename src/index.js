import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './stateProvider';
import reducer, {initialState } from './reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialValue={initialState}>
      {reducer}
      <App />
    </StateProvider>
  </React.StrictMode>
);

