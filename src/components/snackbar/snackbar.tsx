import React from 'react';

import { Snackbar, SnackbarProps } from '@material-ui/core';
import Alert, { Color } from '@material-ui/lab/Alert';

interface SnackBarProps extends SnackbarProps {
  severity: Color;
}

const SnackBar = ({ severity, message }: SnackBarProps) => (
  <Snackbar autoHideDuration={6000}>
    <Alert severity={severity}>
      {message}
    </Alert>
  </Snackbar>
);

export default SnackBar;
