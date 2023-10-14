import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    popularVideos: null,
    searchVideos: [],
  },
  reducers: {
    addPopularVideos: (state, action) => {
      const { popularVideos } = action.payload;
      state.popularVideos = popularVideos;
    },
    addSearchVideos: (state, action) => {
      const { searchVideos } = action.payload;
      state.searchVideos = searchVideos;
    },
  },
});

export const { addPopularVideos, addSearchVideos } = videoSlice.actions;
export default videoSlice.reducer;
