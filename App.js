import React, { useState } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";

import SearchBar from "./Components/SearchLocation";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bucket TEST</Text>
      <SearchBar
        placeholder="Search..."
        onChangeText={handleSearchTextChange}
      />
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 40,
  },
});
