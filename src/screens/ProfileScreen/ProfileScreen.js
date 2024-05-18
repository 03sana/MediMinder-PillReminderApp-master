import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Image, View, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import Profile from "../../../assets/images/Avatar.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { logout, updateProfile } from "../../store/auth/actions";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const ProfileScreen = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [username, setUsername] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");

  useEffect(() => {
    if (user) {
      setUsername(user.displayName || "");
      setEmail(user.email || "");
    }
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (
        user &&
        !user.emailVerified &&
        user.providerData
          .map((provider) => provider.providerId)
          .includes("password")
      ) {
        alert("Please verify your email.");
      }
      dispatch(
        setUser(
          user
            ? {
                email: user.email,
                uid: user.uid,
                displayName: user.displayName,
              }
            : null
        )
      );
    });

    return () => unsubscribe();
  }, [dispatch]);

  const onSavePressed = async () => {
    try {
      const payload = { uid: user.uid, username, email };
      await updateProfile(dispatch, payload);
      Alert.alert(
        "Success",
        "Please verify your new email (if changed) to complete the update."
      );
    } catch (error) {
      console.error("Failed to update profile:", error);
      Alert.alert("Error", error.message);
    }
  };

  const onLogoutPressed = async () => {
    const isLoggedOut = await logout(dispatch);
    if (isLoggedOut) {
      navigation.navigate("Welcome");
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={Profile}
          style={styles.profileImage}
          resizeMode="contain"
        />
        <Text style={styles.displayName}>{username}</Text>

        <Text style={styles.label}>Username</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <Text style={styles.label}>Email</Text>
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomButton text={"Save Changes"} onPress={onSavePressed} />
        <CustomButton
          text={"Logout"}
          onPress={onLogoutPressed}
          type="TERTIARY2"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  displayName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#196EB0",
    marginBottom: 10,
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 10,
    color: "#196EB0",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
