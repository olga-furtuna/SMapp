import * as types from "./index";

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user,
  };
};

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user,
  };
};

export const userProfileAction = (user) => {
  return {
    type: types.USER_PROFILE,
    user,
  };
};

export const fetchPostsAction = (user) => {
  return {
    type: types.FETCH_POSTS,
    user,
  };
};

export const createPostAction = (user) => {
  return {
    type: types.CREATE_POST,
    user,
  };
};

export const deletePostAction = (user) => {
  return {
    type: types.DELETE_POST,
    user,
  };
};

//NEW
export const fetchCommentsAction = (user) => {
  return {
    type: types.FETCH_COMMENTS,
    user,
  };
};

export const createCommentAction = (user) => {
  return {
    type: types.CREATE_COMMENT,
    user,
  };
};

export const deleteCommentAction = (user) => {
  return {
    type: types.DELETE_COMMENT,
    user,
  };
};