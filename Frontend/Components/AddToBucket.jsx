import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import UserContext from "../Contexts/userContext";
import axios from "axios";

const AddToBucket = ({ locationData, onPressAdd }) => {
  const loggedInUser = useContext(UserContext);
  const user = loggedInUser.username;

  // console.log(locationData.display_name);
  // console.log(locationData.lon);
  // console.log(locationData.lang);

  const handleSubmit = (e) => {
    e.preventDefault();
    const patchBody = {
      name: locationData.display_name,
      coordinates: locationData.lon,
    };
    axios.patch(
      `https://red-muddy-woodpecker.cyclic.app/api/${user}/list`,
      patchBody
    );
  };

  return (
    <TouchableOpacity style={styles.add} onPress={handleSubmit}>
      <Text>Add To Your Bucket List</Text>
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
