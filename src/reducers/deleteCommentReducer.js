import * as types from "../actions";

export default function(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.DELETE_COMMENT_SUCCESS:
      return { ...state, response };
    default:
      return state;
  }
}
