import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import AddToBucket from "./AddToBucket";
import RemoveFromBucket from "./RemoveFromBucket";
import { useNavigation } from "@react-navigation/native";

import { useContext } from 'react'
import UserContext from "../Contexts/userContext";

const LocationCard = ({ selectedLocation }) => {
  const loggedInUser = useContext(UserContext);
  const [locationData, setLocationData] = useState(null);
  const [addedLocation, setAddedLocation] = useState(null);
  const [removedLocation, setRemovedLocation] = useState(null);
  const [addRed, setAddRed] = useState({});
  const [addGreen, setAddGreen] = useState({
    ...styles.place,
    color: "#FFFFFF",
  });

  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate("LocationDetails");
  };

  const onPressClose = () => {
    setLocationData(null);
    setAddedLocation(null);
    setRemovedLocation(null);
    setAddGreen({
      ...styles.place,
      color: "#FFFFFF",
    });
  };
  const onPressAdd = () => {
    setAddedLocation(locationData.display_name);
    setRemovedLocation(null);
    setAddGreen({ ...styles.place, color: "#00FF00" });
  };

  const onPressRemove = () => {
    setAddedLocation(null);
    setAddGreen({
      ...styles.place,
      color: "#FF0000",
    });
    setRemovedLocation(locationData.display_name);
    setAddRed({ ...styles.place, color: "#FF0000" });
  };

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${selectedLocation.latitude}&lon=${selectedLocation.longitude}`
        );
        const data = await response.json();
        setLocationData(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (selectedLocation) {
      fetchLocationData();
    }
  }, [selectedLocation]);

  if (!selectedLocation || !locationData) {
    return null;
  }

  return (
    <View style={styles.modal}>
      <View style={styles.card}>
        <Text style={styles.place}>{locationData.display_name}</Text>
        <Text style={styles.coords}>Longitude: {locationData.lon}</Text>
        <Text style={styles.coords}>Latitude: {locationData.lat}</Text>
        <AddToBucket locationData={locationData} onPressAdd={onPressAdd} />
        {addedLocation && (
          <Text style={styles.addedLocation}>
            {`"${addedLocation.replace(/,.*/, "")}"`} has successfully been
            added to your list
          </Text>
        )}
        <RemoveFromBucket
          locationData={locationData}
          onPressRemove={onPressRemove}
        />
        {removedLocation && (
          <Text style={styles.removedLocation}>
            {`"${removedLocation.replace(/,.*/, "")}"`} has successfully been
            removed from your list
          </Text>
        )}
        <TouchableOpacity style={styles.closeButton} onPress={onPressClose}>
          <Text>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.closeButton}
          title="Create new User"
          onPress={() => navigation.navigate("LocationDetails")}
        >
          <Text>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
  card: {
    backgroundColor: "#000000",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  place: {
    color: "#FF0000",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  coords: {
    color: "#ffffff",
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    backgroundColor: "#444444",
    borderRadius: 10,
    marginTop: 20,
  },
  addedLocation: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  removedLocation: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default LocationCard;
