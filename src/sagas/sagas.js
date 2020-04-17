import { put, call } from "redux-saga/effects";
import {
  registerUserService,
  loginUserService,
  userProfileService,
  fetchPostsService,
} from "../services/apiService";

import * as types from "../actions";

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield [put({ type: types.REGISTER_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield [put({ type: types.LOGIN_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}

export function* profileSaga(payload) {
  const response = yield call(userProfileService, payload);
  yield [put({ type: types.USER_PROFILE_SUCCESS, response })];
}

export function* fetchPostsSaga(payload) {
  const response = yield call(fetchPostsService, payload);
  yield [put({ type: types.FETCH_POSTS_SUCCESS, response })];
}
