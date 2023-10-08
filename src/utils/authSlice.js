import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, provider } from "../firebase";

const initialState = {
  accessToken: sessionStorage.getItem("ytc-access-token")
    ? sessionStorage.getItem("ytc-access-token")
    : null,
  profile: JSON.parse(sessionStorage.getItem("ytc-user"))
    ? JSON.parse(sessionStorage.getItem("ytc-user"))
    : {
        name: "",
        photoURL: "",
        email: "",
      },
  status: "idle",
  error: null,
};

export const login = createAsyncThunk("auth/login", async () => {
  try {
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

    const res = await auth.signInWithPopup(provider);

    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture,
      email: res.additionalUserInfo.profile.email,
    };

    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    return { accessToken, profile };
  } catch (error) {
    console.log(error);
    return {};
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await auth.signOut();
  sessionStorage.removeItem("ytc-access-token");
  sessionStorage.removeItem("ytc-user");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload.accessToken;
        state.profile = action.payload.profile;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "succeeded";
        state.accessToken = null;
        state.profile = {};
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
