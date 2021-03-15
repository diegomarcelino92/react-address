import { all, fork } from 'redux-saga/effects';

import getAddressRequest from './getAddressRequest';

function* appSagas() {
  yield all([
    fork(getAddressRequest),
  ]);
}

export default appSagas;
