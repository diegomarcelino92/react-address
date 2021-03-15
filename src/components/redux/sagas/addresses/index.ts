import { all, fork } from 'redux-saga/effects';

import addressRequest from './addressRequest';


function* appSagas() {
  yield all([
    fork(addressRequest),
  ]);
}

export default appSagas;
