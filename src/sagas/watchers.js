import { takeLatest } from "redux-saga/effects";
import { registerSaga, loginSaga, profileSaga, fetchPostsSaga, createPostSaga, deletePostSaga } from "./sagas";

import * as types from "../actions";

export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.USER_PROFILE, profileSaga);
  yield takeLatest(types.FETCH_POSTS, fetchPostsSaga);
  yield takeLatest(types.CREATE_POST, createPostSaga);
  yield takeLatest(types.DELETE_POST, deletePostSaga);
  //NEW
  // yield takeLatest(types.FETCH_COMMENTS, fetchPostsSaga);
  // yield takeLatest(types.CREATE_COMMENT, createPostSaga);
  // yield takeLatest(types.DELETE_COMMENT, deletePostSaga);

}
