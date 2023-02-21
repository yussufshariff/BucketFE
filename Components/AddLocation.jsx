import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const AddLocation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const performSearch = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          searchQuery
        )}&format=json&limit=1`
      );
      const data = await response.json();
      const location = data[0];
      setSelectedLocation({
        latitude: parseFloat(location.lat),
        longitude: parseFloat(location.lon),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 29.9792,
          longitude: 31.1342,
          latitudeDelta: 0.001,
          longitudeDelta: 0.005,
        }}
        onPress={(e) => setSelectedLocation(e.nativeEvent.coordinate)}
      >
        <Marker
          coordinate={
            selectedLocation
              ? {
                  latitude: selectedLocation.latitude,
                  longitude: selectedLocation.longitude,
                }
              : null
          }
        />
      </MapView>
      <View style={{ position: "absolute", top: 10, width: "100%" }}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          onSubmitEditing={performSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 10,
    margin: 10,
    color: "#000",
    borderColor: "#666",
    backgroundColor: "#FFF",
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default AddLocation;
