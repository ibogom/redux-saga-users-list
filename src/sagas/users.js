import { put, call, takeEvery } from 'redux-saga/effects';

import { USERS } from '../constants';
import { fetchUsers } from '../api';
import { setUsers, setError } from '../actions';

export function* handleUsersLoad() {
  try {
    const users = yield call(fetchUsers);
    yield put(setUsers(users));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchUsersLoad() {
  yield takeEvery(USERS.LOAD, handleUsersLoad);
}
