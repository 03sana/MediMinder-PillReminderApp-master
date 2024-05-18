import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Array representing the days of the week starting from Sunday
const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const CalendarComponent = () => {
  const today = new Date(); // Get the current date

  const startOfWeek = today.getDate() - today.getDay(); // Calculate the start of the week based on today's date and day of the week

  const weekDays = daysOfWeek.map((day, index) => {
    // Create a new date object for each day of the current week
    const date = new Date(
      today.getFullYear(),
      today.getMonth(),
      startOfWeek + index
    );
    const dayOfMonth = date.getDate(); // Get the day of the month
    const isToday = date.toDateString() === today.toDateString(); // Check if the date is today

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
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 42,
  },
  today: {
    borderRadius: 10,

    borderColor: "#196EB0",
    borderWidth: 2,
  },
  dayOfWeek: {
    fontSize: 10,
    color: "black",
  },
  dayOfMonth: {
    fontSize: 10,
    color: "black",
    fontWeight: "bold",
  },
});

export default CalendarComponent;
