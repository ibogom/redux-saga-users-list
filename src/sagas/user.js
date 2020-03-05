import { put, call, takeEvery, select } from 'redux-saga/effects';

import { DETAILS } from '../constants';
import { fetchUserDetails } from '../api';
import { setUserDetails, setUserDetailsError } from '../actions';

export function* handleDetailsLoad({ id }) {
  try {
    const details = yield call(fetchUserDetails, id);
    yield put(setUserDetails(details));
  } catch (error) {
    yield put(setUserDetailsError(error.toString()));
  }
}

export default function* watchUserLoad() {
  yield takeEvery(DETAILS.LOAD, handleDetailsLoad);
}
