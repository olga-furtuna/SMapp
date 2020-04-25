import { AuthStorage } from "./authStorage";

export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = "https://postify-api.herokuapp.com/auth";

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.data),
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = "https://postify-api.herokuapp.com/auth/sign_in";

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.data),
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then((response) => {
      return Promise.all([response.json(), response.headers]);
    })
    .then(([responseJson, headers]) => {
      return {
        result: responseJson,
        headers: headers,
      };
    })
    .then((json) => {
      return json;
    });
};

export const userProfileService = (request) => {
  const USER_PROFILE_API_ENDPOINT =
    "https://postify-api.herokuapp.com/users/me";

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(
    USER_PROFILE_API_ENDPOINT + buildQueryString(AuthStorage.getData()),
    parameters
  )
    .then((response) => {
      return {
        result: response.json(),
      };
    })
    .then((json) => {
      return json.result;
    })
    .then((result) => result);
};

export const fetchPostsService = (request) => {
  const FETCH_POSTS_API_ENDPOINT = "https://postify-api.herokuapp.com/posts";

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(
    FETCH_POSTS_API_ENDPOINT + buildQueryString(AuthStorage.getData()),
    parameters
  )
    .then((response) => {
      return {
        result: response.json(),
      };
    })
    .then((json) => {
      return json.result;
    })
    .then((result) => result);
};

export const createPostService = (request) => {
  const CREATE_POST_API_ENDPOINT = "https://postify-api.herokuapp.com/posts";

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.data),
  };

  return fetch(
    CREATE_POST_API_ENDPOINT + buildQueryString(AuthStorage.getData()),
    parameters
  )
    .then((response) => {
      return {
        result: response.json(),
      };
    })
    .then((json) => {
      return json.result;
    })
    .then((result) => result);
};

export const deletePostService = (request) => {
  const DELETE_POST_API_ENDPOINT = "https://postify-api.herokuapp.com/posts/";

  const parameters = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(
    DELETE_POST_API_ENDPOINT +
      request.data.id +
      buildQueryString(AuthStorage.getData()),
    parameters
  ).then((response) => {
    return response;
  });
};

export const fetchSinglePostService = (request) => {
  const FETCH_SINGLE_POST_API_ENDPOINT =
    "https://postify-api.herokuapp.com/posts/";

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(
    FETCH_SINGLE_POST_API_ENDPOINT +
      request.data.id +
      buildQueryString(AuthStorage.getData()),
    parameters
  )
    .then((response) => {
      return {
        result: response.json(),
      };
    })
    .then((json) => {
      return json.result;
    })
    .then((result) => result);
};

export const fetchCommentsService = (request) => {
  const FETCH_COMMENTS_API_ENDPOINT =
    "https://postify-api.herokuapp.com/comments";

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(
    FETCH_COMMENTS_API_ENDPOINT + buildQueryString(AuthStorage.getData()),
    parameters
  )
    .then((response) => {
      return {
        result: response.json(),
      };
    })
    .then((json) => {
      return json.result;
    })
    .then((result) => result);
};

export const createCommentService = (request) => {
  const CREATE_COMMENT_API_ENDPOINT =
    "https://postify-api.herokuapp.com/comments";

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.data),
  };

  return fetch(
    CREATE_COMMENT_API_ENDPOINT + buildQueryString(AuthStorage.getData()),
    parameters
  )
    .then((response) => {
      return {
        result: response.json(),
      };
    })
    .then((json) => {
      return json.result;
    })
    .then((result) => result);
};

export const deleteCommentService = (request) => {
  const DELETE_COMMENT_API_ENDPOINT =
    "https://postify-api.herokuapp.com/comments/";

  const parameters = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(
    DELETE_COMMENT_API_ENDPOINT +
      request.data.id +
      buildQueryString(AuthStorage.getData()),
    parameters
  ).then((response) => {
    return response;
  });
};

const buildQueryString = (authData) => {
  return `?access-token=${authData.access_token}&client=${authData.client}&uid=${authData.uid}`;
};
