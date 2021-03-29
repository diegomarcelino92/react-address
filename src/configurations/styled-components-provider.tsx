import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './material-provider';

// Acesso ao thema do material dentro do styled-components CSS-in-JS

interface StyledProviderProps {
  children: React.ReactNode;
}

export const StyledProvider = ({ children }: StyledProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
