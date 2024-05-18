import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet } from "react-native";
const DropDownMenu = ({ value, setValue }) => {
  // Accepting value and setValue props
  const data = [
    { key: "1", value: "Capsule" },
    { key: "2", value: "Drop" },
    { key: "3", value: "Tablet" },
  ];

  return (
    <SelectList
      setSelected={setValue}
      boxStyles={styles.container}
      data={data}
      search={false}
      dropdownStyles={styles.dropdown}
      placeholder="Select type"
      defaultOption={value}
    />
  );
};

export default DropDownMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8F9",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  dropdown: {},
});
