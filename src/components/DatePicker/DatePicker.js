import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = ({ dateTime, setDateTime }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    const newDateTime = new Date(dateTime);
    newDateTime.setFullYear(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    setDateTime(newDateTime);
    hideDatePicker();
  };

  const handleConfirmTime = (time) => {
    const newDateTime = new Date(dateTime);
    newDateTime.setHours(time.getHours());
    newDateTime.setMinutes(time.getMinutes());
    setDateTime(newDateTime);
    hideTimePicker();
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker} style={styles.dateButton}>
        <Text style={styles.dateText}>
          {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
        </Text>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  dateButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginVertical: 10,
  },
  dateText: {
    fontSize: 16,
    color: "black",
  },
  editText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#FBBC05",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
  },
});
