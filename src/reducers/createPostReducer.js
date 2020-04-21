import * as types from "../actions";

export default function(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.CREATE_POST_SUCCESS:
      return { ...state, response };
    default:
      return state;
  }
}
