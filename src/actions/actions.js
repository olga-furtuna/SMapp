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
