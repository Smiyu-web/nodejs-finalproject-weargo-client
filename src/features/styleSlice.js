import { createSlice } from "@reduxjs/toolkit";

const styleSlice = createSlice({
  name: "style",
  initialState: {
    styles: {},
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state, action) => {
      state.currentUser = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const setCurrentUser = (state) => state.user.currentUser;

export default styleSlice.reducer;
