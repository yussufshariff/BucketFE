import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserCard = ({ name, profilePicture }) => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate("UserDetails", { name });
  };

  const imageUrl =
    "https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg";

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
