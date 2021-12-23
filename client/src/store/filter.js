import { createSlice } from "@reduxjs/toolkit";

const initialState = ["궁금해요", "마실가요", "찾아줘요", "나눠봐요"];

const filterMenu = createSlice({
  name: "category",
  initialState,
  reducer: {
    addMenu: (state, action) => {
      state.push(action.payload);
    },
    removeMenu: (state, action) => {
      state.splice(
        state.findIndex((item) => item === action.payload),
        1
      );
    },
    clearMenu: () => [],
    initMenu: () => initialState,
  },
});

export const { addMenu, removeMenu, clearMenu, initMenu } = filterMenu.actions;

export default filterMenu.reducer;
