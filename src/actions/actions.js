import * as types from "./index";

export const registerUserAction = (data) => {
  return {
    type: types.REGISTER_USER,
    data,
  };
};

export const loginUserAction = (data) => {
  return {
    type: types.LOGIN_USER,
    data,
  };
};

export const userProfileAction = (data) => {
  return {
    type: types.USER_PROFILE,
    data,
  };
};

export const fetchPostsAction = (data) => {
  return {
    type: types.FETCH_POSTS,
    data,
  };
};

export const createPostAction = (data) => {
  return {
    type: types.CREATE_POST,
    data,
  };
};

export const deletePostAction = (data) => {
  return {
    type: types.DELETE_POST,
    data,
  };
};

export const fetchSinglePostAction = (data) => {
  return {
    type: types.FETCH_SINGLE_POST,
    data,
  };
};

export const fetchCommentsAction = (data) => {
  return {
    type: types.FETCH_COMMENTS,
    data,
  };
};

export const createCommentAction = (data) => {
  return {
    type: types.CREATE_COMMENT,
    data,
  };
};

export const deleteCommentAction = (data) => {
  return {
    type: types.DELETE_COMMENT,
    data,
  };
};
