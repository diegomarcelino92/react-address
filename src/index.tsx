import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import MaterialProvider from './components/configuration/material-provider';
import ReduxProvider from './components/configuration/redux-provider';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <MaterialProvider>
        <App />
      </MaterialProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
