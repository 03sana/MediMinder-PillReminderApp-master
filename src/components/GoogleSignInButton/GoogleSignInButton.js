import React, { useEffect } from "react";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user/reducers";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";

const GoogleSignInButton = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "97566136614-375vdr4jg0cco8a4llqh1f3ill7cckfg.apps.googleusercontent.com",
      scopes: [],
      offlineAccess: true,
    });
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);
      const { user } = await signInWithCredential(auth, googleCredential);

      dispatch(setUser({ email: user.email, uid: user.uid }));
      navigation.navigate("MainTabs", { screen: "HomeScreen" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={onGoogleButtonPress}
    />
  );
};

export default GoogleSignInButton;
