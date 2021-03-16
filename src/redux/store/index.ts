import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import immutable from 'seamless-immutable';

import rootReducer from '../reducers';
import rootSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window as any)
  .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  immutable(rootReducer),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSagas);

export default store;
