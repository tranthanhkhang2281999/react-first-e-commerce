import { takeLatest, put, call, all } from 'redux-saga/effects';

import USER_ACTION_TYPES from '../user/user.types';

import { clearCart } from './cart.actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
