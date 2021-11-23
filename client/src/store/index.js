import { configureStore } from "@reduxjs/toolkit";

import user from "./user";

const reducer = {
  user,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});
