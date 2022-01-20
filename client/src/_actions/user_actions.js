import axios from "axios";
import {
  LOGIN_USER,
  GOOGLE_LOGIN,
  REGISTER_USER,
  LOGOUT_USER,
  AUTH_USER,
} from "./types";
import { USER_SERVER } from "../Config";

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function googleLogin(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/googlelogin`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: GOOGLE_LOGIN,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios.get(`${USER_SERVER}/logout`).then((res) => res.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}
export function auth() {
  const request = axios.get(`${USER_SERVER}/auth`).then((res) => res.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
