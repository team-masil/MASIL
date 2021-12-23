import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.API_DEV
    : process.env.API_PRODUCT;

const client = axios.create({
  baseURL,
  withCredentials: true,
});

export default client;
