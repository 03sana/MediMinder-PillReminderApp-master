"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setIsCheckingAuth = exports.setIsLoading = exports.setIsLogedIn = exports.counterSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var counterSlice = (0, _toolkit.createSlice)({
  name: "auth",
  initialState: {
    isLoading: false,
    isLogedIn: false,
    isCheckingAuth: true
  },
  reducers: {
    setIsLogedIn: function setIsLogedIn(state, action) {
      state.isLogedIn = action.payload;
    },
    setIsLoading: function setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsCheckingAuth: function setIsCheckingAuth(state, action) {
      state.isCheckingAuth = action.payload;
    }
  }
});
exports.counterSlice = counterSlice;
var _counterSlice$actions = counterSlice.actions,
    setIsLogedIn = _counterSlice$actions.setIsLogedIn,
    setIsLoading = _counterSlice$actions.setIsLoading,
    setIsCheckingAuth = _counterSlice$actions.setIsCheckingAuth;
exports.setIsCheckingAuth = setIsCheckingAuth;
exports.setIsLoading = setIsLoading;
exports.setIsLogedIn = setIsLogedIn;
var _default = counterSlice.reducer;
exports["default"] = _default;