import { createSlice } from "@reduxjs/toolkit";

const styleSlice = createSlice({
  name: "style",
  initialState: {
    listStyles: [],
    currentStyle: [],
  },
  reducers: {
    setListStyles: (state, action) => {
      state.listStyles = action.payload;
    },
    setCurrentStyle: (state, action) => {
      state.currentStyleId = action.payload;
    },
  },
});

export const { setListStyles, setCurrentStyle } = styleSlice.actions;

export const selectListStyles = (state) => state.style.listStyles;
export const selectCurrentStyle = (state) => state.style.currentStyleId;

export default styleSlice.reducer;
