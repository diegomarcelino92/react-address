import React from 'react';
import ReactDOM from 'react-dom';

import MaterialProvider from 'configurations/material-provider';
import ReduxProvider from 'configurations/redux-provider';
import { StyledProvider } from 'configurations/styled-components-provider';

import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <MaterialProvider>
        <StyledProvider>
          <App />
        </StyledProvider>
      </MaterialProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
