"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.db = exports.auth = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _firestore = require("firebase/firestore");

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA_ZvBdoBzUe1_7CuY4b7FQ4GbMfpH1GB0",
  authDomain: "mediminder-a3d22.firebaseapp.com",
  databaseURL: "https://mediminder-a3d22-default-rtdb.firebaseio.com",
  projectId: "mediminder-a3d22",
  storageBucket: "mediminder-a3d22.appspot.com",
  messagingSenderId: "97566136614",
  appId: "1:97566136614:web:44d38debaf1890dd5cc9e7"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig); // Initialize Firebase Authentication and Firestore

var auth = (0, _auth.getAuth)(app);
exports.auth = auth;
var db = (0, _firestore.getFirestore)(app);
exports.db = db;
var _default = app;
exports["default"] = _default;