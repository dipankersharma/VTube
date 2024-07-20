import { configureStore } from "@reduxjs/toolkit";
import Allvideo from "./Reducers/AllvideoReducer";

export const store = configureStore({
  reducer: {
    video: Allvideo,
  },
});
