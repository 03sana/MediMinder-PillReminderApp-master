"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initUserAuthStateListner = initUserAuthStateListner;

var _auth = require("@firebase/auth");

var _reducers = require("./reducers");

var _firebase = require("../../firebase");

function initUserAuthStateListner(dispatch, callback) {
  var unsubscribe = (0, _auth.onAuthStateChanged)(_firebase.auth, function (user) {
    console.log("onAuthStateChanged", user);
    dispatch((0, _reducers.setUser)(user ? {
      email: user.email,
      uid: user.uid
    } : null));
    callback();
  });
  return unsubscribe;
}