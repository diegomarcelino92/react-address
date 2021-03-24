import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { AnyAction } from 'redux';

export interface AddressesReducer {
  address: Address;
  error: ReducerError;
  loading: boolean
}

export type AddressCreators = {
  getAddressRequest(cep: string): AnyAction
  getAddressSuccess(data: Address): AnyAction
  getAddressError(error: ReducerError): AnyAction
}

export type AddressTypes = {
  GET_ADDRESS_REQUEST: string;
  GET_ADDRESS_SUCCESS: string;
  GET_ADDRESS_ERROR: string
}

export const { Types, Creators } = createActions<AddressTypes, AddressCreators>({
  getAddressRequest: ['cep'],
  getAddressSuccess: ['address'],
  getAddressError: ['error'],
});

const INITIAL_STATE = Immutable<AddressesReducer>({
  address: {},
  error: {},
  loading: false,
});

const getAddressRequest = (state = INITIAL_STATE) => state.merge({ loading: true, address: {} });
const getAddressSuccess = (state = INITIAL_STATE, { address }: { address: Address }) => state.merge({ address, loading: false });
const getAddressError = (state = INITIAL_STATE, { error }: { error: ReducerError }) => state.merge({ loading: false, error });

export default createReducer(INITIAL_STATE, {
  [Types.GET_ADDRESS_REQUEST]: getAddressRequest,
  [Types.GET_ADDRESS_SUCCESS]: getAddressSuccess,
  [Types.GET_ADDRESS_ERROR]: getAddressError,
});
