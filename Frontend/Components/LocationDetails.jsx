import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../Contexts/userContext';
import axios from 'axios';
import { get } from 'mongoose';

function LocationDetails({ route }) {
  const [locationComments, setlocationComments] = useState({});
  const { locationData } = route.params;
  const loggedInUser = useContext(UserContext);

  const handleNewComment = () => {
    console.log('Hello')
    Alert.alert(
      'Add Comment',
      'Enter your comment',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: (input) => {
            const postBody = {
              locationId: location.data.location[0]._id,
              userId: loggedInUser._id,
              body: input,
              images: 'kebab',
            };
            return axios.post(
              `https://red-muddy-woodpecker.cyclic.app/api/comments`,
              postBody
            );
          },
        },
      ],
      'plain-text'
    );
  };

  const getComments = async (locationData) => {
    let location = null;
    let comments = null;
    try {
      location = await axios.get(
        `https://red-muddy-woodpecker.cyclic.app/api/${locationData.display_name}`
      );
    } catch {}

    try {
      comments = await axios.get(
        `https://red-muddy-woodpecker.cyclic.app/api/${locationData.display_name}/comments`
      );
    } catch {}
    return { location, comments };
  };
  getComments(locationData)
    .then((location, comments) => {
      console.log(location, comments);
      if (location.location === null) {
        alert('Location not in DB ');
      } else if (comments === undefined) {
        Alert.alert(
          'Comments not found',
          'Be the first to comment',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Add Comment',
              onPress: () => handleNewComment(),
            },
          ],
          { cancelable: false }
        );
      } else {
        console.log(comments);
        setlocationComments(comments.data.comments[0]);
      }
    })
    .catch(console.error);

  console.log(locationComments, '<<<<<<<');
  return (
    <View>
      <Text style={styles.title}>
        {locationData.display_name.replace(/,.*/, '')}
      </Text>

      <Text style={styles.title}>{locationComments.body} </Text>
      <Text style={styles.title}>{locationComments.owner} </Text>
      <TouchableOpacity onPress={() => handleNewComment()}>
        <Text style={styles.button}>ADD COMMENT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    border: '5px solid',
    textAlign: 'center',
  fontSize: 15,
  padding: 10,},
  title: {
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
  },
});

export default LocationDetails;
