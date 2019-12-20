import {
  createStore, combineReducers, applyMiddleware, Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import authReducer from './auth/reducer';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = (): Store<AppState> => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
