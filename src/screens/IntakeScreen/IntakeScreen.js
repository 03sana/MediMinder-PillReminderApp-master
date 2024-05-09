import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CalendarComponent from "../../components/CalenderComponent";
import IntakeTracker from "../../components/IntakeTracker";
import MedicineInfo from "../../components/MedicineInfo";

import { useNavigation } from "@react-navigation/native";

const IntakeScreen = () => {
  const navigation = useNavigation();

  const handleAddMedication = () => {
    navigation.navigate("CalenderScreen"); // Ensure the screen name matches exactly.
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title}>Today</Text>
          <CalendarComponent />
          <IntakeTracker />
          <MedicineInfo
            medicineName="Medicine A"
            amount="1 tablet"
            time="8:00 AM"
          />
          <MedicineInfo
            medicineName="Medicine B"
            amount="2 tablets"
            time="12:00 PM"
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.plusButton} onPress={handleAddMedication}>
        <Text style={styles.plusButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#196EB0",
    margin: 10,
  },
  plusButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#196EB0",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  plusButtonText: {
    fontSize: 30,
    color: "#fff",
  },
});

export default IntakeScreen;
