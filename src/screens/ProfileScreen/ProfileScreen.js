import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  ScrollViewComponent,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import Profile from "../../../assets/images/Avatar.png";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from "@react-navigation/native";
import { logout } from "../../store/auth/actions";
import { setUser } from "../../store/user/reducers";
const ProfileScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState();

  const dispatch = useDispatch()
  const navigation = useNavigation();

  const onSavePressed = () => {
    navigation.navigate("ConfirmEmail");
  };

  const onSigninPressed = () => {
    navigation.navigate("SignIn");
  };

  const onLogoutPressed = async () =>{
   const isLogedOut= await logout(dispatch)
   if(isLogedOut){
    navigation.navigate("Welcome");
    dispatch(setUser(null));
   }
  
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={Profile}
          //style={(styles.Profile, { height: height * 0.3 })}
          resizeMode="contain"
        />

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
          placeholder="Gender"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Date of Birth"
          value={username}
          setValue={setUsername}
        />

        <CustomButton text={"Save"} onPress={onSavePressed} />

        <CustomButton
          text={"logout"}
          onPress={onLogoutPressed}
          type="TERTIARY2"
        />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

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
