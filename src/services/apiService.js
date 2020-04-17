import { AuthStorage } from "./authStorage";

export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = "https://postify-api.herokuapp.com/auth";

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.user),
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
    body: JSON.stringify(request.user),
  };

  return (
    fetch(LOGIN_API_ENDPOINT, parameters)
      // .then(response => {
      //   return {
      //     result: response.json(),
      //     headers: response.headers
      //   };
      // })
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
      })
  );
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

const buildQueryString = (authData) => {
  return `?access-token=${authData.access_token}&client=${authData.client}&uid=${authData.uid}`;
};
