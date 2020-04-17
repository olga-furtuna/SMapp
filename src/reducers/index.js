import { combineReducers } from "redux";
import register from "./registerReducer";
import login from "./loginReducer";
import profile from "./profileReducer";
import fetchPosts from "./postsReducer";

const rootReducer = combineReducers({
  register,
  login,
  profile,
  fetchPosts
});

export default rootReducer;
