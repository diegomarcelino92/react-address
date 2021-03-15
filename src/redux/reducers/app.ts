import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { SnackbarProps } from '@material-ui/core';

export interface AppReducer {
  snackbar: SnackbarProps;
}

export const { Types, Creators } = createActions({
  show_snackbar: ['props'],

});

const INITIAL_STATE = Immutable<AppReducer>({
  snackbar: {},
});

const showSnackbar = (state = INITIAL_STATE, { props }: { props: SnackbarProps }) => state.merge({ snackbar: props });

export default createReducer(INITIAL_STATE, {
  [Types.SHOW_SNACKBAR]: showSnackbar,
});
