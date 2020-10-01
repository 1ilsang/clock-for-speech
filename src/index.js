import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { StoreProvider } from '~/store/index.jsx';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('app')
);
