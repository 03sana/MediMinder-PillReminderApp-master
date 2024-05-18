import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const MedicineDetail = ({ route, navigation }) => {
  const { medicine } = route.params;
  const dateTime = medicine.dateTime
    ? new Date(medicine.dateTime).toLocaleString()
    : "Not set";
  console.log("Received in MedicineDetail:", medicine, dateTime);

  // Receives medicine and dateTime from IntakeScreen
  console.log("Received in MedicineDetail:", medicine);

  const navigateToEdit = () => {
    // Navigates to the Edit screen (to be implemented)
    console.log("Navigate to Edit screen");
  };

  console.log("Received in MedicineDetail:", medicine);
  const handleDeleteMedicine = async () => {
    Alert.alert(
      "Deleting Medicine",
      "Are you sure you want to delete this medicine?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Yes",
          onPress: async () => {
            if (medicine && medicine.id) {
              try {
                await deleteDoc(doc(db, "medicines", medicine.id));
                Alert.alert("Success", "Medicine deleted successfully.");
                navigation.goBack();
              } catch (error) {
                console.error("Error deleting document:", error);
                Alert.alert("Error", "Failed to delete medicine");
              }
            } else {
              Alert.alert("Error", "No medicine ID found");
            }
          },
        },
      ]
    );
  };

  const handleTakeMedicine = async () => {
    if (medicine && medicine.id) {
      try {
        await updateDoc(doc(db, "medicines", medicine.id), { taken: true });
        Alert.alert("Success", "You have taken your medicine.");
        navigation.goBack();
      } catch (error) {
        console.error("Error updating document:", error);
        Alert.alert("Error", "Failed to mark as taken");
      }
    } else {
      Alert.alert("Error", "No medicine ID found");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="information-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteMedicine}>
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
      <Text style={styles.scheduled}>Scheduled for {dateTime}</Text>
      <Text
        style={styles.dosage}
      >{`${medicine.amount}, ${medicine.dose}`}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleTakeMedicine}>
          <Text style={styles.buttonText}>Take</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToEdit} // Call navigateToEdit function on Edit button press
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
