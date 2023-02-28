import { Text, View, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/userContext";
import axios from "axios";
import { get } from "mongoose";

function LocationDetails({ route }) {
  const [locationComments, setlocationComments] = useState({});
  const { locationData } = route.params;
  const loggedInUser = useContext(UserContext);

  useEffect(() => {
    let location = null;
    let comments = null;
    const getComments = async () => {
      try {
        location = await axios.get(
          `https://red-muddy-woodpecker.cyclic.app/api/${locationData.display_name}`
        );
      } catch {}

      try {
        comments = await axios.get(
          `https://red-muddy-woodpecker.cyclic.app/api/${location.data.location[0]._id}/comments`
        );
      } catch {}
    };
    getComments()
      .then(() => {
        if (location === null) {
          alert("Location not in DB ");
        } else {
          if (comments === null) {
            alert("Comments not found be the first to comment");
          } else {
            console.log(comments.data);
            setlocationComments(comments.data.comments[0]);
          }
        }
      })
      .catch(console.error);
  }, [locationData]);

  console.log(locationComments, "<<<<<<<");
  return (
    <View>
      <Text style={styles.title}>
        {locationData.display_name.replace(/,.*/, "")}
      </Text>

      <Text style={styles.title}>{locationComments.body} </Text>
      <Text style={styles.title}>{locationComments.owner} </Text>
      {/* <Text style={styles.title}>{locationComments.images} </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    padding: 10,
  },
});

export default LocationDetails;
