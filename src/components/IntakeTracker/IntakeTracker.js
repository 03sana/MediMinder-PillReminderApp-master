import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const IntakeTracker = ({ taken = 0, total = 2 }) => {
  // Function to get the current day of the week as a string
  const getCurrentDay = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date().getDay();
    return daysOfWeek[today];
  };

  const day = getCurrentDay();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Intakes</Text>
      <View style={styles.circle}>
        <Image
          source={require("../../../assets/images/pill_img.png")}
          style={styles.pillImage}
        />
        <Text style={styles.intakeText}>{`${taken}/${total}`}</Text>
        <Text style={styles.dayText}>{day}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#E0F7FA",
    alignItems: "center",
    justifyContent: "center",
  },
  pillImage: {
    width: 50,
    height: 40,
    marginBottom: 10,
  },
  intakeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  dayText: {
    fontSize: 18,
    color: "#000",
  },
});

export default IntakeTracker;
