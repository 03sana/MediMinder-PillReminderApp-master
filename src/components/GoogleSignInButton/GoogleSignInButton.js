import React from "react";
import { Button } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const GoogleSignInButton = () => {
  //Configure Google Signin

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.configure({
        webClientId:
          "97566136614-375vdr4jg0cco8a4llqh1f3ill7cckfg.apps.googleusercontent.com",
        offlineAccess: false,
      });

      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const { idToken } = await GoogleSignin.signIn();
      console.log("Google Play Services available", idToken);

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userSignIn = await auth().signInWithCredential(googleCredential);
      console.log("User signed in: ", userSignIn);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  // Button UI
  return (
    <Button
      title="Sign-In with Google"
      onPress={() =>
        onGoogleButtonPress().then(() => console.log("Signed in with Google!"))
      }
    />
  );
};

export default GoogleSignInButton;
