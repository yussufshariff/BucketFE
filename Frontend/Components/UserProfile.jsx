import { Image, View, StyleSheet, Button, Text } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import UserContext from "../Contexts/userContext";
import * as ImagePicker from 'expo-image-picker';
import { patchProfilePic, getListByUser } from '../Utils/api';


export default function UserProfile() {
  const loggedInUser = useContext(UserContext);
  const [profilePic, setProfilePic] = useState(loggedInUser.profile_picture)
  const [list, setList] = useState([])

  useEffect(() => {
    getListByUser(loggedInUser.username).then((list) => {
      setList(list.data.userList)
    })
  }, [])

  let count = 0;
  list.forEach((location) => {
    if(location.hasVisited === true) {
      count ++
    }
  })

  

  const handleProfilePictureUpdate = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result.assets[0].uri)
    setProfilePic(result.assets[0].uri)
    patchProfilePic(loggedInUser.username)
  }

  return (
    <View>
    <View style={styles.header_style}>
      <Image
        style={styles.avatar}
        source={{uri: profilePic}}
      />
      <Button onPress={handleProfilePictureUpdate}  title="Update Avatar"></Button>
    </View>
    <View>
      <Text>Bucket Count: {list.length}</Text>
      <Text>Completed Buckets: {count}</Text>
    </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 24,
    marginRight: 16,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    margin: 10,
  },
  header_style: {
    textAlign: "center",
    backgroundColor: "#B2C2D2",
    padding: 20,
    fontSize: 20,
    alignItems: "center"
  },
})  