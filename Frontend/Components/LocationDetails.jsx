import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const LocationDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Great Wall of China </Text>
      <View></View>
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
  column: {},
});

export default LocationDetails;
