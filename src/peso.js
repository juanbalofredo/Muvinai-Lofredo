import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  name: "",
  wei: "right",
};

export const peso = createSlice({
  name: "peso",

  initialState,

  reducers: {
    oneUsers(state, action) {
      state.name = action.payload;
      state.user = true;
    },
    loggedOut(state) {
      state.name = "";
      state.user = false;
    },
    waay(state, action) {
      state.wei = action.payload;
    },
  },
});

export const { oneUsers, loggedOut, waay } = peso.actions;
export default peso.reducer;
