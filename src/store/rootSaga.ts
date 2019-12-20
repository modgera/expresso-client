import { all, fork } from 'redux-saga/effects';
import loginSaga from './auth/saga/login';

function* rootSaga() {
  yield all([
    fork(loginSaga),
  ]);
}

export default rootSaga;
