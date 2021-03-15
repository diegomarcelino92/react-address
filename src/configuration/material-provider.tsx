import React from 'react';

import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000051',
    },
    secondary: {
      main: '#fdd835',
    },
  },
  typography: {
    fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          margin: 0,
          height: '100vh',
          backgroundColor: '#ebebeb',
          fontFamily: 'Noto Sans JP',
        },
        '#root': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      },
    },
  },
});

interface MaterialProviderProps {
  children: React.ReactNode
}

const MaterialProvider = ({ children }: MaterialProviderProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default MaterialProvider;
