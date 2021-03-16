import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

import { SnackbarProps } from '@material-ui/core';
import { Color } from '@material-ui/lab';

import { AnyAction } from 'redux';

type SnackBarProps = SnackbarProps & { severity?: Color }
export interface AppReducer {
  snackbar: SnackBarProps;
}

export type AppCreators = {
  showSnackbar(snackbar: SnackBarProps): AnyAction
}
export type AppTypes = {
  SHOW_SNACKBAR: string
}

export const { Types, Creators } = createActions<AppTypes, AppCreators>({
  showSnackbar: ['props'],
});

const INITIAL_STATE = immutable<AppReducer>({
  snackbar: {},
});

const showSnackbar = (state = INITIAL_STATE, { props }: { props: SnackbarProps }) => state.merge({ snackbar: props });

export default createReducer(INITIAL_STATE, {
  [Types.SHOW_SNACKBAR]: showSnackbar,
});
