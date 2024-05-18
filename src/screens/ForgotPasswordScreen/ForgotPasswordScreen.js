import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const auth = getAuth();

  const onSendPress = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        alert(
          "Password reset email sent! Please check your email for the reset code."
        );
        navigation.navigate("NewPassword"); // Navigate to NewPasswordScreen to enter the new password
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Display an error message to the user
        alert(`Error: ${errorMessage}`);
      });
  };

  const onSigninPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
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
