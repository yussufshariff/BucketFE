import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const AddToBucket = ({ locationData, onPressAdd }) => {
  return (
    <TouchableOpacity style={styles.add} onPress={onPressAdd}>
      <Text>Add To List</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  add: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    backgroundColor: "#444444",
    borderRadius: 10,
    marginTop: 20,
  },
});
export default AddToBucket;
