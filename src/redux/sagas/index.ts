import { all, fork } from 'redux-saga/effects';

import addressesSagas from './addresses';

function* rootSaga() {
	yield all([fork(addressesSagas)]);
}

export default rootSaga;
