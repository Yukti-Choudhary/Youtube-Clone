import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./headerSlice";
import authSlice from "./authSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: {
    header: headerSlice,
    auth: authSlice,
    chat: chatSlice,
    search: searchSlice,
    video: videoSlice,
  },
});

export default store;
