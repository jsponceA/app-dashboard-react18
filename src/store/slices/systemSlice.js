import { createSlice } from "@reduxjs/toolkit";

export const systemSlice = createSlice({
  name: "system",
  initialState: {
    darkMode: false,
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDarkMode } = systemSlice.actions;

export default systemSlice.reducer;
