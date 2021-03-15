import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSagas from '../sagas'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const composeEnhancers =
//   typeof window === 'object' &&
//     (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : applyMiddleware(sagaMiddleware);


// const enhancer = composeEnhancers(
//   applyMiddleware(sagaMiddleware),
// );


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSagas)

export default store