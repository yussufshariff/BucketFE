import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import UserContext from "../Contexts/userContext";
import axios from "axios";

const AddToBucket = ({ locationData, setAddedLocation }) => {
  const loggedInUser = useContext(UserContext);
  const user = loggedInUser.username;

  const handleNewLocation = (e) => {
    const postBody = {
      name: locationData.display_name,
      coordinates: locationData.lon,
    };
    return axios.post(
      `https://red-muddy-woodpecker.cyclic.app/api/locations`,
      postBody
    );
  };

  const handleSubmit = (e) => {
    const patchBody = {
      name: locationData.display_name,
      coordinates: locationData.lon,
    };
    setAddedLocation(locationData.display_name);
    return axios.patch(
      `https://red-muddy-woodpecker.cyclic.app/api/${user}/list`,
      patchBody
    );
  };

  return (
    <TouchableOpacity
      style={styles.add}
      onPress={() => {
        handleNewLocation();
        handleSubmit();
      }}
    >
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
