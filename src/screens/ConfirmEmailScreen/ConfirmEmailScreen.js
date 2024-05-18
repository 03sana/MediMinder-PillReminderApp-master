import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { useNavigation } from "@react-navigation/native";
const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");

  const navigation = useNavigation("");

  const onConfirmPressed = () => {
    navigation.navigate("Settings");
  };

  const onSigninPressed = () => {
    navigation.navigate("SignIn");
  };

  const onResendPress = () => {
    console.warn("onResendPress");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm your Email</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text={"Confirm"} onPress={onConfirmPressed} />

        <CustomButton
          text={"Resend code"}
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text={"Back to Sign in"}
          onPress={onSigninPressed}
          type="TERTIARY2"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;

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
