import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import styleSlice from "../features/styleSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    style: styleSlice,
  },
});
