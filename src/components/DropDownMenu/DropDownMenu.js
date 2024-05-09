import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";

const DropDownMenu = () => {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Capsule" },
    { key: "2", value: "Drop" },
    { key: "3", value: "Tablet" },
  ];

  return (
    <SelectList
      setSelected={(val) => setSelected(val)}
      data={data}
      save="value"
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
    paddingHorizontal: 10,
    marginVertical: 5,
  },

  input: {},
});
