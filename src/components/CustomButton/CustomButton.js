import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
  isLoading,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      {isLoading && <ActivityIndicator color="#ffffff" />}
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    padding: 14,
    marginVertical: 5,
    borderRadius: 5,
  },

  container_PRIMARY: {
    width: "100%",
    backgroundColor: "#196EB0",

    alignItems: "center",
  },
  container_SECONDARY: {
    width: "100%",
    borderColor: "#196EB0",
    borderWidth: 2,
  },

  container_TERTIARY3: {
    width: "50%",
    backgroundColor: "#FBBC05",
    alignItems: "center",
  },

  container_TERTIARY4: {
    width: "50%",
    backgroundColor: "#196EB0",
    alignItems: "center",
  },

  text: {
    fontWeight: "bold",
    color: "white",
  },

  text_TERTIARY: {
    color: "#196EB0",
    textAlign: "right",
    paddingBottom: 30,
  },
  text_SECONDARY: {
    color: "#196EB0",
    textAlign: "center",
  },
  text_TERTIARY2: {
    color: "#196EB0",
    textAlign: "center",
    paddingTop: 60,
  },
  text_TERTIARY4: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
