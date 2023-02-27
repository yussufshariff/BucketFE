import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from 'react'
import UserContext from "../Contexts/userContext";

const RemoveFromBucket = ({ locationData, onPressRemove }) => {
  const loggedInUser = useContext(UserContext)
  return (
    <TouchableOpacity style={styles.add} onPress={onPressRemove}>
      <Text>Remove From List</Text>
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
export default RemoveFromBucket;
