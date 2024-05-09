import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Ensure you have this library installed

const MedicineInfo = ({ medicineName, amount, time }) => {
  // Function to handle the info icon press
  const handleInfoPress = () => {
    // Here you can navigate to another screen or toggle a modal
    console.log("Show details and delete option");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.medicineName}>{medicineName}</Text>
      <Text>{amount}</Text>
      <Text>{time}</Text>
      <TouchableOpacity onPress={handleInfoPress}>
        <Icon name="information-circle-outline" size={24} color="#196EB0" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  medicineName: {
    fontWeight: "bold",
  },
});

export default MedicineInfo;
