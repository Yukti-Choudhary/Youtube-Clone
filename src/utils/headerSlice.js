import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileShow: false,
  toggle: true,
  sidebarPortalShow: true,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleProfileShow: (state) => {
      state.profileShow = !state.profileShow;
    },
    toggleSidebar: (state) => {
      state.toggle = !state.toggle;
    },
    toggleSidebarPortal: (state) => {
      state.sidebarPortalShow = !state.sidebarPortalShow;
    },
  },
});

export const { toggleProfileShow, toggleSidebar, toggleSidebarPortal } =
  headerSlice.actions;

export default headerSlice.reducer;
