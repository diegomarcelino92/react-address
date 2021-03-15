import { combineReducers } from 'redux';

import addresses, { AddressesReducer } from './addresses';
import app, { AppReducer } from './app';

export interface RootState {
  app: AppReducer,
  addresses: AddressesReducer;
}

const rootReducer = combineReducers({
  app,
  addresses,
});

export default rootReducer;
