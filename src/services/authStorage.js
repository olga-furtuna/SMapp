export class AuthStorage {
  static setData(authData) {
    localStorage.setItem("access_token", authData.access_token);
    localStorage.setItem("client", authData.client);
    localStorage.setItem("uid", authData.uid);
    localStorage.setItem("user_id", authData.user_id);
  }

  static getData() {
    return {
      access_token: localStorage.getItem("access_token"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
      user_id: localStorage.getItem("user_id"),
    };
  }

  static removeData() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("client");
    localStorage.removeItem("uid");
    localStorage.removeItem("user_id");
  }

  static hasData() {
    var authData = this.getData();
    return !!authData.access_token && !!authData.client && !!authData.uid;
  }
}
