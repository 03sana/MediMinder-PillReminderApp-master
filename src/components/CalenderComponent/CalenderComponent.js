import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const daysOfWeek = ["RI", "SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"]; // Adjust days as needed

const CalendarComponent = () => {
  const today = new Date();
  const startOfWeek = today.getDate() - today.getDay(); // Calculate the start of the week based on today

  const weekDays = daysOfWeek.map((day, index) => {
    const date = new Date(
      today.getFullYear(),
      today.getMonth(),
      startOfWeek + index
    );
    const dayOfMonth = date.getDate();
    const isToday = date.toDateString() === today.toDateString();

    return (
      <TouchableOpacity
        key={day}
        style={[styles.dayContainer, isToday ? styles.today : null]}
      >
        <Text style={styles.dayOfWeek}>{day}</Text>
        <Text style={styles.dayOfMonth}>{dayOfMonth}</Text>
      </TouchableOpacity>
    );
  });

  return <View style={styles.container}>{weekDays}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around", // Ensures items are spaced evenly
    paddingVertical: 10,
    backgroundColor: "#fff", // Set background color to white
  },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 32, // Adjust width to fit your layout
    height: 42, // Adjust height as needed
  },
  today: {
    borderRadius: 10, // Half of width and height to create a perfect circle

    borderColor: "#196EB0", // Border color for the current day
    borderWidth: 2,
  },
  dayOfWeek: {
    fontSize: 10, // Adjust font size as needed
    color: "black", // Text color for day of week
  },
  dayOfMonth: {
    fontSize: 10, // Adjust font size as needed
    color: "black", // Text color for day of month
    fontWeight: "bold", // Bold text for the day of the month
  },
});

export default CalendarComponent;
