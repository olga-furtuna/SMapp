import { put, call } from "redux-saga/effects";
import {
  registerUserService,
  loginUserService,
  userProfileService,
  fetchPostsService,
  createPostService,
  deletePostService,
  fetchCommentsService,
  createCommentService,
  deleteCommentService
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

export function* createPostSaga(payload) {
  const response = yield call(createPostService, payload);
  yield [put({ type: types.CREATE_POST_SUCCESS, response })];
}

export function* deletePostSaga(payload) {
  const response = yield call(deletePostService, payload);
  yield [put({ type: types.DELETE_POST_SUCCESS, response })];
}

//new
export function* fetchCommentsSaga(payload) {
  const response = yield call(fetchCommentsService, payload);
  yield [put({ type: types.FETCH_COMMENTS_SUCCESS, response })];
}

export function* createCommentSaga(payload) {
  const response = yield call(createCommentService, payload);
  yield [put({ type: types.CREATE_COMMENT_SUCCESS, response })];
}

export function* deleteCommentSaga(payload) {
  const response = yield call(deleteCommentService, payload);
  yield [put({ type: types.DELETE_COMMENT_SUCCESS, response })];
}