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
  const [medicineName, setMedicineName] = useState("");
  const [medicineType, setMedicineType] = useState("");
  const [dose, setDose] = useState("");
  const [amount, setAmount] = useState("");

  const onSavePress = () => {
    // Pass new medicine details back to the IntakeScreen
    navigation.navigate("IntakeScreen", {
      newMedicine: { name: medicineName, type: medicineType, dose, amount },
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Medicine</Text>
        <CustomInput
          placeholder="Name (e.g., Ibuprofen)"
          value={medicineName}
          setValue={setMedicineName}
        />
        <DropDownMenu value={medicineType} setValue={setMedicineType} />
        <CustomInput
          placeholder="Dose (e.g., 100mg)"
          value={dose}
          setValue={setDose}
        />
        <CustomInput
          placeholder="Amount (e.g., 3)"
          value={amount}
          setValue={setAmount}
        />
        <CustomButton text="Save" onPress={onSavePress} type="TERTIARY4" />
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
