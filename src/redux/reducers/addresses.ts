import { Address, ReducerError } from 'common-types/address';
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export interface AddressesReducer {
  addresses: Address[];
  error: ReducerError;
}

export const { Types, Creators } = createActions({
  getAddressRequest: ['page', 'category'],
  getAddressSuccess: ['data'],
  getAddressError: ['error'],
});

const INITIAL_STATE = Immutable<AddressesReducer>({
  addresses: [],
  error: {},
});

const getAddressRequest = (state = INITIAL_STATE) => state.merge({});
const getAddressSuccess = (state = INITIAL_STATE, { data }: { data: Address }) => state.set('error', data);
const getAddressError = (state = INITIAL_STATE, { error }: { error: ReducerError }) => state.set('error', error);

export default createReducer(INITIAL_STATE, {
  [Types.GET_ADDRESS_REQUEST]: getAddressError,
  [Types.GET_ADDRESS_SUCCESS]: getAddressRequest,
  [Types.GET_ADDRESS_ERROR]: getAddressSuccess,
});
