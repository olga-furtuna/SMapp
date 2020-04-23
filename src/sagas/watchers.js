import { takeLatest } from "redux-saga/effects";
import {
  registerSaga,
  loginSaga,
  profileSaga,
  fetchPostsSaga,
  createPostSaga,
  deletePostSaga,
  fetchSinglePostSaga,
  fetchCommentsSaga,
  createCommentSaga,
  deleteCommentSaga,
} from "./sagas";

import * as types from "../actions";

export default function* watchAppActions() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.USER_PROFILE, profileSaga);
  yield takeLatest(types.FETCH_POSTS, fetchPostsSaga);
  yield takeLatest(types.CREATE_POST, createPostSaga);
  yield takeLatest(types.DELETE_POST, deletePostSaga);
  yield takeLatest(types.FETCH_SINGLE_POST, fetchSinglePostSaga);
  yield takeLatest(types.FETCH_COMMENTS, fetchCommentsSaga);
  yield takeLatest(types.CREATE_COMMENT, createCommentSaga);
  yield takeLatest(types.DELETE_COMMENT, deleteCommentSaga);
}
