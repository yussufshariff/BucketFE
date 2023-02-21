import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import UserCard from "./UserCard";

const UserDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}> Bucket List </Text>
      <Image
        source={{
          uri: "https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
  },
});

export default UserDetails;
