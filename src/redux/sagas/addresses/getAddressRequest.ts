/* eslint-disable camelcase */
import { Address } from 'common-types/address';
import { put, takeLatest, call } from 'redux-saga/effects';

import { addressAPI } from 'redux/api/address';
import { Creators, Types } from 'redux/reducers/addresses';

function* getAddressRequest() {
  try {
    const data: Address = yield call(addressAPI.address, '86806740');

    yield put(Creators.getAddressSuccess(data));
  } catch (error) {
    yield put(Creators.getAddressError(error));
  }
}

export default function* watch() {
  yield takeLatest(Types.GET_ADDRESS_REQUEST, getAddressRequest);
}
