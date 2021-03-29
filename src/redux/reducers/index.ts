import { combineReducers } from 'redux';
import { ImmutableObject } from 'seamless-immutable';

import addresses, { AddressesReducer } from './addresses';
import app, { AppReducer } from './app';

export interface RootState {
  app: ImmutableObject<AppReducer>;
  addresses: ImmutableObject<AddressesReducer>;
}

const rootReducer = combineReducers({
  app,
  addresses,
});

export default rootReducer;
