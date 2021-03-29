import React from 'react';

import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IconButton, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Close } from '@material-ui/icons';

import { RootState } from 'redux/reducers';
import { Creators } from 'redux/reducers/app';

const mapStateToProps = ({ app }: RootState) => ({
  ...app.getIn(['snackbar']),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      showSnackbar: Creators.showSnackbar,
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const SnackBar = ({
  severity,
  message,
  showSnackbar,
  open,
}: PropsFromRedux) => {
  function onClose() {
    showSnackbar({ open: false });
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      action={
        <IconButton>
          <Close />
        </IconButton>
      }
    >
      <Alert severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default connector(SnackBar);
