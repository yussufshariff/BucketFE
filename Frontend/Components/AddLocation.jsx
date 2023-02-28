import React, { useState, useEffect } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Alert,
  Touchable,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import LocationCard from "./LocationCard";
import * as Location from "expo-location";
import { useContext } from "react";
import UserContext from "../Contexts/userContext";

const {
  CustomMarkerGWC,
  CustomMarkerTM,
  CustomMarkerMP,
  CustomMarkerCI,
  CustomMarkerCRS,
  CustomMarkerColo,
  CustomMarkerPetra,
} = require("./CustomMarkers");
const AddLocation = () => {
  const loggedInUser = useContext(UserContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 53.47207390660095,
    longitude: -2.238239950240586,
  });
  const [selectedRegion, setSelectedRegion] = useState({
    latitude: 53.47207390660095,
    longitude: -2.238239950240586,
    latitudeDelta: 0.01,
    longitudeDelta: 0.001,
  });
  useEffect(() => {
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission needed",
        "This app needs your permission to access your location",
        [{ text: "OK", onPress: () => getLocationPermission() }]
      );
    } else {
      getCurrentLocation();
    }
  };

  const getCurrentLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setSelectedLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    setSelectedRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    });
  };
  const performSearch = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          searchQuery
        )}&format=json&limit=1`
      );
      const data = await response.json();
      if (data.length > 0) {
        const location = data[0];
        setSelectedLocation({
          latitude: parseFloat(location.lat),
          longitude: parseFloat(location.lon),
        });
        setSelectedRegion({
          latitude: parseFloat(location.lat),
          longitude: parseFloat(location.lon),
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        region={selectedRegion}
        onPress={(e) => setSelectedLocation(e.nativeEvent.coordinate)}
      >
        {/* Machu Picchu */}
        <Marker
          coordinate={{
            latitude: -13.164421950000001,
            longitude: -72.54508510173372,
          }}
        >
          <CustomMarkerMP />
        </Marker>
        {/* Christ the Redeemer */}
        <Marker
          coordinate={{
            latitude: -22.951748034063,
            longitude: -43.210444286599156,
          }}
        >
          <CustomMarkerCRS />
        </Marker>
        {/* Taj Mahal */}
        <Marker
          coordinate={{
            latitude: 27.1753356734283,
            longitude: 78.04214219812248,
          }}
        >
          <CustomMarkerTM />
        </Marker>
        {/* The Great Wall of china */}
        <Marker
          coordinate={{
            latitude: 40.432111842699086,
            longitude: 116.57038562722992,
          }}
        >
          <CustomMarkerGWC />
        </Marker>

        {/* Colloseum */}
        <Marker
          coordinate={{
            latitude: 41.89036991543221,
            longitude: 12.492209440757193,
          }}
        >
          <CustomMarkerColo />
        </Marker>
        {/* Petra*/}
        <TouchableOpacity>
          <Marker
            coordinate={{
              latitude: 30.32879655,
              longitude: 35.44234710984083,
            }}
          >
            <CustomMarkerPetra />
          </Marker>
        </TouchableOpacity>
        {/* Chichen Itza */}
        <Marker
          coordinate={{
            latitude: 20.68285195,
            longitude: -88.5687196355205,
          }}
        >
          <CustomMarkerCI />
        </Marker>
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
      {selectedLocation && <LocationCard selectedLocation={selectedLocation} />}
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
