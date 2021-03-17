import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/app';
import MaterialProvider from 'configuration/material-provider';
import ReduxProvider from 'configuration/redux-provider';
import { StyledProvider } from 'configuration/styled-components-proviser';

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
