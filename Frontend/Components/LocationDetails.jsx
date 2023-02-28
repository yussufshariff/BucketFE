import { Text, View, StyleSheet, Alert } from "react-native";
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
    const handleNewComment = () => {
      Alert.prompt(
        "Add Comment",
        "Enter your comment",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: (input) => {
              const postBody = {
                locationId: location.data.location[0]._id,
                userId: loggedInUser._id,
                body: "kebab",
                images: "kebab",
              };
              return axios.post(
                `https://red-muddy-woodpecker.cyclic.app/api/comments`,
                postBody
              );
            },
          },
        ],
        "plain-text"
      );
    };

    getComments()
      .then(() => {
        if (location === null) {
          alert("Location not in DB ");
        } else if (comments === null) {
          Alert.alert(
            "Comments not found",
            "Be the first to comment",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "Add Comment",
                onPress: () => handleNewComment(),
              },
            ],
            { cancelable: false }
          );
        } else {
          console.log(comments.data);
          setlocationComments(comments.data.comments[0]);
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
