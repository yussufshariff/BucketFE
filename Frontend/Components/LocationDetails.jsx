import { Text, View, StyleSheet } from "react-native";
import { useContext, useEffect } from "react";
import UserContext from "../Contexts/userContext";
import axios from "axios";

function LocationDetails({ route }) {
  const { locationData } = route.params;
  const loggedInUser = useContext(UserContext);
  const username = loggedInUser.username;

  const getAllComments = () => {
    return axios
      .get(
        `https://red-muddy-woodpecker.cyclic.app/api/63fcc69c29bb15efca4ea6ba/comments`
      )
      .then((response) => {
        console.log(response.data.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getAllComments();

  // return (
  //   <View>
  //     <Text style={styles.title}>
  //       {locationData.display_name.replace(/,.*/, "")}
  //     </Text>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    padding: 10,
  },
});

export default LocationDetails;
