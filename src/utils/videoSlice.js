import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    popularVideos: null,
    searchVideos: null,
    views: null,
    duration: null,
    channelIcon: null,
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
    addViews: (state, action) => {
      const { views } = action.payload;
      state.views = views;
    },
    addDuration: (state, action) => {
      const { duration } = action.payload;
      state.duration = duration;
    },
    addChannelIcon: (state, action) => {
      const { channelIcon } = action.payload;
      state.channelIcon = channelIcon;
    },
  },
});

export const {
  addPopularVideos,
  addSearchVideos,
  addDuration,
  addViews,
  addChannelIcon,
} = videoSlice.actions;
export default videoSlice.reducer;
