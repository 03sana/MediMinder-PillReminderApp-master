"use strict";

var onGoogleButtonPress = function onGoogleButtonPress() {
  var _ref, idToken, googleCredential, userSignIn;

  return regeneratorRuntime.async(
    function onGoogleButtonPress$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(
              GoogleSignin.configure({
                webClientId:
                  "97566136614-375vdr4jg0cco8a4llqh1f3ill7cckfg.apps.googleusercontent.com",
                offlineAccess: false,
              })
            );

          case 3:
            _context.next = 5;
            return regeneratorRuntime.awrap(
              GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true,
              })
            );

          case 5:
            _context.next = 7;
            return regeneratorRuntime.awrap(GoogleSignin.signIn());

          case 7:
            _ref = _context.sent;
            idToken = _ref.idToken;
            console.log("Google Play Services available", idToken);
            googleCredential = auth.GoogleAuthProvider.credential(idToken);
            _context.next = 13;
            return regeneratorRuntime.awrap(
              auth().signInWithCredential(googleCredential)
            );

          case 13:
            userSignIn = _context.sent;
            console.log("User signed in: ", userSignIn);
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.error("Error signing in with Google: ", _context.t0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    },
    null,
    null,
    [[0, 17]]
  );
};
