import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  information: [],
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    getVideo(state, action) {
      state.information = action.payload;
    },
    removeVideo(state, action) {
      state.information = null;
    },
  },
});

export const { getVideo, removeVideo } = videoSlice.actions;
export default videoSlice.reducer;
