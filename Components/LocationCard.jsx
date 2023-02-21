import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const LocationCard = ({ selectedLocation }) => {
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
  console.log(locationData);
  console.log(locationData.lat);
  console.log(locationData.lon);
  //   console.log(locationData.boundingbox);
  //   console.log(locationData.address);
  //   console.log(locationData.address.city);
  //   console.log(locationData.address.country);
  //   return <Text>{locationData.address.city}</Text>;
};

export default LocationCard;
