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
import DropDownMenu from "../../components/DropDownMenu";

import { useNavigation } from "@react-navigation/native";

const CalenderScreen = () => {
  const navigation = useNavigation();

  const onSavePress = () => {
    navigation.navigate("IntakeScreen");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Medicine</Text>
        <Text style={styles.description}>
          Fill out the fields and hit the Save Button to add it!
        </Text>

        <Text style={styles.inputText}>Name*</Text>
        <CustomInput
          placeholder="Name (e.g. Ibuprofen)"
          // value={}
          // setValue={}
        />

        <Text style={styles.inputText}>Type*</Text>
        <DropDownMenu />

        <Text style={styles.inputText}>Dose*</Text>
        <CustomInput
          placeholder="Dose (e.g. 100mg)"
          // value={}
          // setValue={}
        />

        <Text style={styles.inputText}>Amount*</Text>
        <CustomInput
          placeholder="Dose (e.g. 3)"
          //value={}
          // setValue={}
        />
        <Text style={styles.inputText}>Reminders</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton text={"Save"} onPress={onSavePress} type="TERTIARY4" />
      </View>
    </ScrollView>
  );
};

export default CalenderScreen;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    marginTop: 50,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20, // Adjust as needed
  },
  inputText: {
    fontSize: 10,
    fontWeight: "regular",
    marginTop: 10,
    paddingBottom: 10,
  },
  title: {
    textAlign: "center",
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
