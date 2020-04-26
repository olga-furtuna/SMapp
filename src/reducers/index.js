import { combineReducers } from "redux";
import register from "./registerReducer";
import login from "./loginReducer";
import profile from "./profileReducer";
import fetchPosts from "./postsReducer";
import createPost from "./createPostReducer";
import deletePost from "./deletePostReducer";
import singlePost from "./singlePostReducer";
import editPost from "./editPostReducer";
import fetchComments from "./commentsReducer";
import createComment from "./createCommentReducer";
import deleteComment from "./deleteCommentReducer";

const rootReducer = combineReducers({
  register,
  login,
  profile,
  fetchPosts,
  createPost,
  deletePost,
  singlePost,
  editPost,
  fetchComments,
  createComment,
  deleteComment,
});

export default rootReducer;
