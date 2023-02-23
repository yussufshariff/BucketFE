import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const LocationCard = ({ selectedLocation }) => {
  const [locationData, setLocationData] = useState(null);
  const onPressClose = () => {
    setLocationData(null);
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
        <TouchableOpacity style={styles.closeButton} onPress={onPressClose}>
          <Text>Close</Text>
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
});

export default LocationCard;
