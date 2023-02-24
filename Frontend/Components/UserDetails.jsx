import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const UserDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Bucket List </Text>
      <View style={styles.column}>
        <Image
          style={styles.images}
          source={{
            uri: "https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg",
          }}
        />
        <Image
          style={styles.images}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
  },
  images: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    margin: 5,
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    width: "95%",
    // borderWidth: 1,
    // borderColor: 'blue',
  },
});

export default UserDetails;
