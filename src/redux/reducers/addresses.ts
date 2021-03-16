import { Address, ReducerError } from 'common-types/address';
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export interface AddressesReducer {
  address: Address;
  error: ReducerError;
  loading: boolean
}

export const { Types, Creators } = createActions({
  getAddressRequest: ['page', 'category'],
  getAddressSuccess: ['address'],
  getAddressError: ['error'],
});

const INITIAL_STATE = Immutable<AddressesReducer>({
  address: {},
  error: {},
  loading: false,
});

const getAddressRequest = (state = INITIAL_STATE) => state.merge({ loading: true });
const getAddressSuccess = (state = INITIAL_STATE, { address }: { address: Address }) => state.merge({ address, loading: false });
const getAddressError = (state = INITIAL_STATE, { error }: { error: ReducerError }) => state.merge({ loading: false, error });

export default createReducer(INITIAL_STATE, {
  [Types.GET_ADDRESS_REQUEST]: getAddressError,
  [Types.GET_ADDRESS_SUCCESS]: getAddressRequest,
  [Types.GET_ADDRESS_ERROR]: getAddressSuccess,
});
