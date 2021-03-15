import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  getPublicationsRequest: ['page', 'category'],
  getPublicationsSuccess: ['data'],
  getPublicationsError: ['error'],
});

const INITIAL_STATE = Immutable({
  publishes: {},
  error: {},
});

const getPublicationsSuccess = (state = INITIAL_STATE) => state.merge({});
const getPublicationsError = (state = INITIAL_STATE) => state.set('error', true);

export default createReducer(INITIAL_STATE, {
  [Types.GET_PUBLICATIONS_SUCCESS]: getPublicationsSuccess,
  [Types.GET_PUBLICATIONS_ERROR]: getPublicationsError,
});
