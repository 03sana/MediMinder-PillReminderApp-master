"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setUser = exports.counterSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var counterSlice = (0, _toolkit.createSlice)({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    setUser: function setUser(state, action) {
      console.log("setUser", action.payload);
      state.user = action.payload;
    }
  }
});
exports.counterSlice = counterSlice;
var setUser = counterSlice.actions.setUser;
exports.setUser = setUser;
var _default = counterSlice.reducer;
exports["default"] = _default;