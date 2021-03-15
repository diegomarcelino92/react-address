/* eslint-disable camelcase */
import { put, takeLatest, call } from 'redux-saga/effects';


function* logout() {
  try {
  } catch (error) {

  }
}

export default function* watch() {
  yield takeLatest('Types.LOGOUT_USER_SUCCESS', logout);
}
