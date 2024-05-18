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
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  collection,
  query,
  where,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../../firebase";

const IntakeScreen = () => {
  const navigation = useNavigation();
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    if (!auth.currentUser) {
      console.log("User not logged in");
      return;
    }

    const q = query(
      collection(db, "medicines"),
      where("userId", "==", auth.currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const meds = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMedicines(meds);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleMarkAsTaken = async (medicine) => {
    if (medicine.taken) {
      Alert.alert("Info", "This medicine has already been taken today!");
      return;
    }

    const medicineRef = doc(db, "medicines", medicine.id);
    try {
      await updateDoc(medicineRef, {
        taken: true,
      });
      Alert.alert("Success", "Medicine marked as taken!");
    } catch (error) {
      console.error("Error updating document: ", error);
      Alert.alert("Error", "Failed to mark medicine as taken");
    }
  };

  const handleAddMedication = () => {
    console.log("Navigating to CalendarScreen");
    navigation.navigate("CalenderScreen");
  };

  const handlePressInfo = (medicine) => {
    navigation.navigate("MedicineDetail", { medicine });
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Today</Text>
        <CalendarComponent />

        <IntakeTracker
          taken={medicines.filter((med) => med.taken).length}
          total={medicines.length}
        />

        <FlatList
          data={medicines}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.medicineItem}
              onPress={() => handlePressInfo(item)}
            >
              <Text style={styles.medicineName}>{item.name}</Text>
              <Text style={styles.medicineDetail}>
                {`${item.dose}, ${item.amount} pills`}
              </Text>
              {item.taken && (
                <FontAwesome name="check-circle" size={24} color="green" />
              )}
              <Ionicons
                name="information-circle-outline"
                size={24}
                color="#196EB0"
              />
            </TouchableOpacity>
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
