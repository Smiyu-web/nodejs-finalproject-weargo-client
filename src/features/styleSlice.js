import { createSlice } from "@reduxjs/toolkit";

const styleSlice = createSlice({
  name: "style",
  initialState: {
    listStyles: [],
  },
  reducers: {
    setListStyles: (state, action) => {
      state.listStyles = action.payload;
    },
  },
});

export const { setListStyles } = styleSlice.actions;

export const selectListStyles = (state) => state.style.listStyles;

export default styleSlice.reducer;
