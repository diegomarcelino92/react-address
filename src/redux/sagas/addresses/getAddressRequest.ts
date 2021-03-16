import { Address } from 'common-types/address';
import { put, takeLatest, call } from 'redux-saga/effects';

import { Creators, Types } from 'redux/reducers/addresses';
import { addressAPI } from 'redux/api/address';
import { Creators as AppCreators } from 'redux/reducers/app';

type AddressRequestParams = { cep: string, type: string }

function* getAddressRequest({ cep }: AddressRequestParams) {
  try {
    const data: Address = yield call(addressAPI.address, cep);

    yield put(Creators.getAddressSuccess(data));
    yield put(
      AppCreators.showSnackbar(
        {
          open: true,
          severity: 'success',
          message: 'Endereço encontrado!',
        },
      ),
    );
  } catch (error) {
    yield put(Creators.getAddressError(error));
    yield put(AppCreators.showSnackbar({
      open: true,
      severity: 'error',
      message: 'Não encontramos nenhum endereço',
    }));
  }
}

export default function* watch() {
  yield takeLatest(Types.GET_ADDRESS_REQUEST, getAddressRequest);
}
