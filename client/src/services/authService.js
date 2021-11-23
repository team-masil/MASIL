import client from "./client";

class Auth {
  constructor(props) {
    this.auth = props;
  }

  login = async (method, code) => {
    try {
      const user = await this.auth.post("login", {
        loginType: method,
        code,
      });
      return user;
    } catch (e) {
      console.error(e);
    }
  };

  logout = async () => {
    try {
      const res = await this.auth.post("logout");
      return res;
    } catch (e) {
      console.error(e);
    }
  };

  getUserInfo = async () => {
    try {
      const userInfo = await this.auth.get("auth");
      return userInfo;
    } catch (e) {
      console.error(e);
    }
  };

  signup = async (userInfo) => {
    try {
      const signUp = await this.auth.post("login/signup", userInfo);
      return signUp;
    } catch (e) {
      console.error(e);
    }
  };

  resetToke = () => {
    this.auth.defaults.headers.common["Authorization"] = "";
  };
}

const authService = new Auth(client);
export default authService;
