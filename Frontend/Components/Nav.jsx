import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import UserContext from "../Contexts/userContext";
import favicon from "../assets/favicon.png"

const Nav = (userSettings) => {
  const loggedInUser = useContext(UserContext);
  const navigation = useNavigation();
  const imageUrl = loggedInUser.profile_picture;

  const handleProfilePress = () => {
    navigation.navigate("UserProfile");
  };

  const handleListPress = () => {
    navigation.navigate("UserList");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleProfilePress}>
        <Image source={{ uri: imageUrl }} style={styles.profilePicture} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleListPress}>
        <Image source={favicon} style={styles.profilePicture} />
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
  },
  list: {
    marginLeft: 50
  }
});

export default Nav;
