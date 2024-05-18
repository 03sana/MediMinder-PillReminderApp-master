"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.signup = signup;
exports.logout = logout;
exports.updateProfile = updateProfile;

var _auth = require("@firebase/auth");

var _reducers = require("../user/reducers");

var _reducers2 = require("./reducers");

var _firebase = require("../../firebase");

function login(dispatch, payload) {
  var email, password, userCredential, user;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          email = payload.email, password = payload.password;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _auth.signInWithEmailAndPassword)(_firebase.auth, email, password));

        case 3:
          userCredential = _context.sent;
          user = userCredential.user;
          dispatch((0, _reducers.setUser)({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName
          }));
          return _context.abrupt("return", user);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function signup(dispatch, payload) {
  var email, password, userCredential, user;
  return regeneratorRuntime.async(function signup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          email = payload.email, password = payload.password;
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _auth.createUserWithEmailAndPassword)(_firebase.auth, email, password));

        case 3:
          userCredential = _context2.sent;
          user = userCredential.user;
          dispatch((0, _reducers.setUser)({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName
          }));
          return _context2.abrupt("return", user);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function logout(dispatch) {
  return regeneratorRuntime.async(function logout$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _auth.signOut)(_firebase.auth));

        case 2:
          dispatch((0, _reducers2.setIsLogedIn)(false));
          return _context3.abrupt("return", true);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function updateProfile(dispatch, payload) {
  var uid, email, username, user;
  return regeneratorRuntime.async(function updateProfile$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          uid = payload.uid, email = payload.email, username = payload.username;
          _context4.prev = 1;
          user = _firebase.auth.currentUser; // Check if the email is different and needs to be updated

          if (!(user.email !== email)) {
            _context4.next = 9;
            break;
          }

          _context4.next = 6;
          return regeneratorRuntime.awrap((0, _auth.updateEmail)(user, email));

        case 6:
          _context4.next = 8;
          return regeneratorRuntime.awrap((0, _auth.sendEmailVerification)(user));

        case 8:
          alert("Please verify your new email to complete the update. Check your inbox for a verification email.");

        case 9:
          _context4.next = 11;
          return regeneratorRuntime.awrap((0, _auth.updateProfile)(user, {
            displayName: username
          }));

        case 11:
          // Update user data in the Redux store
          dispatch((0, _reducers.setUser)({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName
          }));
          return _context4.abrupt("return", true);

        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](1);
          console.error("Error updating user profile:", _context4.t0);
          throw _context4.t0;

        case 19:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 15]]);
}