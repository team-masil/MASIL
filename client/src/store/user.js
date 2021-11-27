import { createSlice } from "@reduxjs/toolkit";
/*

TODO

*/

const initialState = {
  nickname: null,
  id: null,
  imageUrl: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
