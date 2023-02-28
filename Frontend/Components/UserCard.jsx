import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import UserContext from "../Contexts/userContext";

const UserCard = () => {
  const loggedInUser = useContext(UserContext);
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate("UserDetails");
  };

  const imageUrl = loggedInUser.profile_picture;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleProfilePress}>
        <Image source={{ uri: imageUrl }} style={styles.profilePicture} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 24,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserCard;
