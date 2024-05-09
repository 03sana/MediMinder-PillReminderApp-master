import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ScrollViewComponent,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import GoogleSignInButton from "../../components/GoogleSignInButton";
import { useNavigation } from "@react-navigation/native";
const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");

  const navigation = useNavigation("");
  const onSendPress = () => {
    navigation.navigate("NewPassword");
  };

  const onSigninPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Rest your password</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomButton text={"Send"} onPress={onSendPress} />

        <CustomButton
          text={"Back to Sign in"}
          onPress={onSigninPressed}
          type="TERTIARY2"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

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
