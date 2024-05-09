import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ScrollViewComponent,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import GoogleSignInButton from "../../components/GoogleSignInButton";
import Toast from 'react-native-toast-message';
import { useNavigation } from "@react-navigation/native";
import { signup } from "../../store/auth/actions";
const SignupScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const showLoginErrorMessage = () => {
    Toast.show({
      type: 'error',
      text1: 'Failed to signup',
      text2: 'Something went wrong. Please try again.'
    });
  }

  const onRegisterPressed = async () => {
    try{
      setIsLoading(true)
      const user=await signup(dispatch,{email, password});
      if(user) navigation.navigate("MainTabs", { screen: "HomeScreen" });
      else showLoginErrorMessage();
    }catch(e){
      showLoginErrorMessage();
      console.error(e);
    } finally{
      setIsLoading(false)
    }
  };

  const onSigninPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello! Register to get started</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomInput
          placeholder="Confirm Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton text={"Register"} isLoading={isLoading} onPress={onRegisterPressed} />

        <GoogleSignInButton />

        <CustomButton
          text={"Already have an account? Login"}
          onPress={onSigninPressed}
          type="TERTIARY2"
        />
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 50,
    marginTop: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#196EB0",
    margin: 10,
  },

  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#196EB0",
  },
});
