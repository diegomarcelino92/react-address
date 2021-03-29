import React from 'react';

import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';

import { LocationOn } from '@material-ui/icons';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        padding="24px 0"
      >
        <LocationOn color="secondary" fontSize="large" />
        <Typography component="h1" variant="h4">
          Procurar CEP
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
