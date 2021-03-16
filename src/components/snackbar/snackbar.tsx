import React from 'react';

import { connect, ConnectedProps } from 'react-redux';

import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { RootState } from 'redux/reducers';

const mapStateToProps = ({ app }: RootState) => ({
  ...app.getIn(['snackbar']),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

const SnackBar = ({ severity, message }: PropsFromRedux) => (
  <Snackbar autoHideDuration={6000}>
    <Alert severity={severity}>
      {message}
    </Alert>
  </Snackbar>
);

export default connector(SnackBar);
