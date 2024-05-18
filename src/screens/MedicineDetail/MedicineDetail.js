import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"; // Ensure these icons are installed

const MedicineDetail = ({ route, navigation }) => {
  const { medicine } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="information-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Delete medicine")}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={24}
            color="red"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Did you take your Medicine?</Text>
      <Image
        source={require("../../../assets/images/pill_img.png")}
        style={styles.pillImage}
      />
      <Text style={styles.medicineName}>{medicine.name}</Text>
      <Text
        style={styles.scheduled}
      >{`Scheduled for ${medicine.time}, ${medicine.day}`}</Text>
      <Text
        style={styles.dosage}
      >{`${medicine.amount}, ${medicine.dose}`}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Take action")}
        >
          <Text style={styles.buttonText}>Take</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Edit action")}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pillImage: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  medicineName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#196EB0",
  },
  scheduled: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  dosage: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    backgroundColor: "#196EB0",
    padding: 10,
    borderRadius: 5,
    width: "40%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MedicineDetail;
