import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TextInput,
  StyleSheet,
  View,
  Alert,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import LocationCard from './LocationCard';
import * as Location from 'expo-location';
import { useContext } from 'react';
import UserContext from '../Contexts/userContext';
import { getAllLocations } from '../Utils/api';

const {
  CustomMarkerGWC,
  CustomMarkerTM,
  CustomMarkerMP,
  CustomMarkerCI,
  CustomMarkerCRS,
  CustomMarkerColo,
  CustomMarkerPetra,
} = require('./CustomMarkers');
const AddLocation = () => {
  const loggedInUser = useContext(UserContext);
  const [locations, setLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
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
    getAllLocations().then((locations) => {
      setLocations(locations);
    });
  }, []);

  useEffect(() => {
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission needed',
        'This app needs your permission to access your location',
        [{ text: 'OK', onPress: () => getLocationPermission() }]
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
        <View>
          {locations.map((location) => {
            console.log(location)
            return (
              <Marker key={location._id}
                coordinate={{
                  longitude: Number(location.coordinates[0]),
                  latitude: Number(location.coordinates[1]),
                }}
              >
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.button}>{location.name}</Text>
                </TouchableOpacity>
              </Marker>
            );
          })}
        </View>
      </MapView>
      <View style={{ position: 'absolute', top: 10, width: '100%' }}>
        <TextInput
          style={styles.searchBar}
          placeholder='Search...'
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
    color: '#000',
    borderColor: '#666',
    backgroundColor: '#FFF',
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  button: {
    color: '#ffffff',
    fontSize: 7,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 2,
    backgroundColor: '#444444',
    borderRadius: 5,
    marginTop: 1,
  },
});

export default AddLocation;
