import React, { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CalendarComponent from "../../components/CalenderComponent";
import IntakeTracker from "../../components/IntakeTracker";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have this library installed

const IntakeScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    // This updates the state when new medicine is passed from CalendarScreen
    if (route.params?.newMedicine) {
      setMedicines((prevMedicines) => [
        ...prevMedicines,
        route.params.newMedicine,
      ]);
    }
  }, [route.params?.newMedicine]);

  const handleAddMedication = () => {
    navigation.navigate("CalendarScreen");
  };

  const handlePressInfo = (medicine) => {
    navigation.navigate("MedicineDetail", { medicine });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Today</Text>
        <CalendarComponent />
        <IntakeTracker />
        <FlatList
          data={medicines}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.medicineItem}>
              <Text style={styles.medicineName}>{item.name}</Text>
              <Text
                style={styles.medicineDetail}
              >{`${item.dose}, ${item.amount} pills`}</Text>
              <TouchableOpacity onPress={() => handlePressInfo(item)}>
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="#196EB0"
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
      <TouchableOpacity style={styles.plusButton} onPress={handleAddMedication}>
        <Text style={styles.plusButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntakeScreen;

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
  medicineItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  medicineName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#196EB0",
  },
  medicineDetail: {
    fontSize: 16,
    color: "#196EB0",
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
