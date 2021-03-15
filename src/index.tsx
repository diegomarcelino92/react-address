import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/app';
import MaterialProvider from 'configuration/material-provider';
import ReduxProvider from 'configuration/redux-provider';

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
