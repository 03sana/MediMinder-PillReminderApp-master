import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { Fragment, useEffect } from "react";
import Logo from "../../../assets/images/mediminder_logo.png";

import CustomButton from "../../components/CustomButton";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const { height } = useWindowDimensions();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.user) navigation.navigate("MainTabs");
  }, [auth.isCheckingAuth]);

  const navigation = useNavigation();
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={Logo}
          style={(styles.logo, { height: height * 0.3 })}
          resizeMode="contain"
        />

        <Text style={styles.title}>Welcome To</Text>
        <Text style={styles.app}>MediMinder</Text>
        <Text style={styles.description}>
          Your personal assistant for managing your medication schedule.
        </Text>
        {auth.isCheckingAuth ? (
          <ActivityIndicator size="large" />
        ) : (
          !user.user && (
            <Fragment>
              <CustomButton
                text={"Sign In"}
                onPress={onSignInPressed}
                type="PRIMARY"
              />
              <CustomButton
                text={"Sign Up"}
                onPress={onSignUpPressed}
                type="SECONDARY"
                filled={false}
              />
            </Fragment>
          )
        )}
      </View>
    </ScrollView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 50,
    marginTop: 30,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FF7551",
  },
  app: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#196EB0",
  },
  description: {
    fontSize: 20,
    fontWeight: "regular",
    color: "#196EB0",
    textAlign: "center",
    marginTop: 20,
    paddingBottom: 30,
  },
});
