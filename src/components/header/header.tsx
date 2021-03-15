import React from 'react';

import {
  AppBar, Box, Button, IconButton, Toolbar, Typography,
} from '@material-ui/core';

import { Menu } from '@material-ui/icons';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Box maxWidth="1280px" display="flex">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
