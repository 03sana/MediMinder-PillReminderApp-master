import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";

import Navigation from "./src/navigation";
import { initUserAuthStateListner } from "./src/store/user/actions";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsCheckingAuth } from "./src/store/auth/reducers";
import Toast from "react-native-toast-message";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
export default function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const setIsAuthLoaded = () => {
      if (auth.isCheckingAuth) dispatch(setIsCheckingAuth(false));
      console.log("here");
    };
    const unsubscribe = initUserAuthStateListner(dispatch, setIsAuthLoaded);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "97566136614-375vdr4jg0cco8a4llqh1f3ill7cckfg.apps.googleusercontent.com",
      scopes: [],
      offlineAccess: true,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
