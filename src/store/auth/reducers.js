import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isLogedIn: false,
    isCheckingAuth: true,
  },
  reducers: {
    setIsLogedIn: (state, action) => {
      state.isLogedIn = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsCheckingAuth: (state, action) => {
      state.isCheckingAuth = action.payload;
    },
  },
});

export const { setIsLogedIn, setIsLoading, setIsCheckingAuth } =
  counterSlice.actions;

export default counterSlice.reducer;
