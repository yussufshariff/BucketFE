import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const LocationCard = ({ selectedLocation, onClose }) => {
  const [locationData, setLocationData] = useState(null);

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

  console.log(locationData.address.country);
  console.log(locationData.lat);
  console.log(locationData.lon);
  //   console.log(locationData.boundingbox);
  //   console.log(locationData.address);
  //   console.log(locationData.address.city);
  //   console.log(locationData.address.country);

  return (
    <View style={styles.modal}>
      <View style={styles.card}>
        <Text style={styles.place}>{locationData.address.country}</Text>
        <Text style={styles.coords}>Latitude: {locationData.lat}</Text>
        <Text style={styles.coords}>Longitude: {locationData.lon}</Text>
        <Text style={styles.address}>
          Address: {locationData.address.postcode}
        </Text>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
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
  address: {
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
