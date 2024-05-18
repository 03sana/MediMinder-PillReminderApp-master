import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  ScrollViewComponent,
} from "react-native";
import Toast from "react-native-toast-message";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Logo from "../../../assets/images/mediminder_logo.png";

import CustomInput from "../../components/CustomInput";

import CustomButton from "../../components/CustomButton";
import GoogleSignInButton from "../../components/GoogleSignInButton";

import { useNavigation } from "@react-navigation/native";
import { login } from "../../store/auth/actions";

const SigninScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { height } = useWindowDimensions();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const showLoginErrorMessage = () => {
    Toast.show({
      type: "error",
      text1: "Failed to login",
      text2: "Something went wrong. Please try again.",
    });
  };
  const onSignInPressed = async () => {
    console.warn("sign in");
    try {
      setIsLoading(true);
      const user = await login(dispatch, { email: username, password });
      if (user) navigation.navigate("MainTabs", { screen: "HomeScreen" });
      else showLoginErrorMessage();
    } catch (e) {
      showLoginErrorMessage();
      console.error(e);
    } finally {
      setIsLoading(false);
    }
    //validate user
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome back! Glad to see you, Again!</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text={"Forgot Password?"}
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
          filled={false}
        />

        <CustomButton
          text={"Sign In"}
          onPress={onSignInPressed}
          type="PRIMARY"
          filled={false}
          isLoading={isLoading}
        />

        <Text style={styles.OrText}>Or</Text>

        <GoogleSignInButton />

        <CustomButton
          text={"Don’t have an account? Register Now"}
          onPress={onSignUpPressed}
          type="TERTIARY2"
          filled={false}
        />
      </View>
    </ScrollView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 50,
    marginTop: 50,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#196EB0",
    paddingBottom: 30,
  },
  OrText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#196EB0",
    paddingTop: 30,
    paddingBottom: 30,
  },
});
