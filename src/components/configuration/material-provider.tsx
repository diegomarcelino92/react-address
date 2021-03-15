import React from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0063ba',
    },
    secondary: {
      main: '#008a00',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          margin: 0,
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
