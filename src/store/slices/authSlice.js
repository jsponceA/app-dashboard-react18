import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetToken: (state) => {
      state.token = null;
    },
    resetUser: (state) => {
      state.user = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, setUser, resetToken, resetUser } = authSlice.actions;

export default authSlice.reducer;
