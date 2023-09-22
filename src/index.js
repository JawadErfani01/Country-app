import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Tailwind.css';
import App from './App';
import {AppProvider} from './context'

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);


