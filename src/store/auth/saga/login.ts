import { takeLatest, put } from 'redux-saga/effects';
import { LOG_IN_REQUEST } from '../actions';
import { loginSucceeded } from '../actionCreators';

function* getAuthUser(action) {
  const user = { cellNumber: action.data.cellNumber, name: 'TestUser', email: 'test@test' };
  yield put(loginSucceeded(user));
}


export default function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, getAuthUser);
}
