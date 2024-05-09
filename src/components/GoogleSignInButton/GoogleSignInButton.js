import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import {
//   GoogleSignin,
// } from "@react-native-google-signin/google-signin";
import CustomButton from "../CustomButton";

const GoogleSignInButton = () => {
  const onSignInGoogle = async () => {
    // try {
    //   await GoogleSignin.hasPlayServices();
    //   const user = await GoogleSignin.signIn();
    //   console.error(user);
    // } catch (e) {
    //   console.error(e);
    // }
  };
  return (
    <>
      <CustomButton
        text={"Continue with Google"}
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
    </>
  );
};

export default GoogleSignInButton;

const styles = StyleSheet.create({});
