import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import CustomInput from "../../components/CustomInput";

import { useNavigation } from "@react-navigation/native";
import DropDownMenu from "../../components/DropDownMenu/DropDownMenu";
import CustomButton from "../../components/CustomButton";
import DatePicker from "../../components/DatePicker";

import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";

const CalendarScreen = () => {
  const navigation = useNavigation();
  const [medicineName, setMedicineName] = useState("");
  const [medicineType, setMedicineType] = useState("");
  const [dose, setDose] = useState("");
  const [amount, setAmount] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  false;
  const onSavePress = async () => {
    try {
      const docRef = await addDoc(collection(db, "medicines"), {
        userId: auth.currentUser.uid,
        name: medicineName,
        type: medicineType,
        dose,
        amount,
        dateTime: dateTime.toISOString(),
        taken: false,
      });
      console.log("Document written with ID: ", docRef.id);

      // Navigate to IntakeScreen with new medicine data
      navigation.navigate("IntakeScreen", {
        newMedicine: {
          id: docRef.id,
          name: medicineName,
          type: medicineType,
          dose,
          amount,
          dateTime: dateTime.toISOString(),
          taken: false,
        },
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      Alert.alert("Error", "Failed to add medicine");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add Medicine</Text>

      <Text style={styles.inputTitle}>Name*</Text>
      <CustomInput
        placeholder="Name (e.g., Ibuprofen)"
        value={medicineName}
        setValue={setMedicineName}
        onChangeText={setMedicineName}
      />

      <Text style={styles.inputTitle}>Type*</Text>
      <DropDownMenu
        value={medicineType}
        setValue={setMedicineType}
        onChangeText={setMedicineType}
      />

      <Text style={styles.inputTitle}>Dose*</Text>
      <CustomInput
        placeholder="Dose (e.g., 100mg)"
        value={dose}
        setValue={setDose}
        onChangeText={setDose}
      />

      <Text style={styles.inputTitle}>Amount*</Text>
      <CustomInput
        placeholder="Amount (e.g., 3)"
        value={amount}
        setValue={setAmount}
        onChangeText={setAmount}
      />
      <Text style={styles.inputTitle}>Reminders</Text>
      <DatePicker dateTime={dateTime} setDateTime={setDateTime} />
      <CustomButton
        text="Save Medicine"
        onPress={onSavePress}
        type="PRIMARY" // This corresponds to a style defined in CustomButton
      />
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: { width: "50%", backgroundColor: "#FBBC05", alignItems: "center" },
});
