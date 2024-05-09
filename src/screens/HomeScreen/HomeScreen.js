import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Reminder from "../../../assets/images/reminderImg.png";

import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  // Function to handle pressing the Add Medicine button
  const onAddMedPress = () => {
    console.log("Navigating to Add Medicine");
    navigation.navigate("MainTabs", { screen: "IntakeScreen" });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={Reminder}
          style={[styles.Reminder, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <Text style={styles.title}>Manage your meds</Text>
        <Text style={styles.description}>
          Add your meds to be reminded on time and track your health
        </Text>

        <CustomButton
          text={"Add Medicine"}
          onPress={onAddMedPress}
          type="TERTIARY3"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 50,
    marginTop: 30,
  },
  Reminder: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 34,
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
