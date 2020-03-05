import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from '../sagas';
import rootReducer from '../reducers';

import middleware, { sagaMiddleware } from './middleware';

const persistConfig = {
  key: 'root',
  storage
};

const reducer = persistReducer(persistConfig,  rootReducer)


const configStore = (initialState = {}) => {
  const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('reducers', () => {
      store.replaceReducer(require('reducers/index').default);
    });
  }

  return {
    persistor: persistStore(store),
    store,
  };
};

const { store, persistor } = configStore();

global.store = store;

export { store, persistor };
