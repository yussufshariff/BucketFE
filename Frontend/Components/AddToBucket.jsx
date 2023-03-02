import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import UserContext from '../Contexts/userContext';
import { postNewLocation, addToBucketList } from '../Utils/api';

const AddToBucket = ({ locationData, setLocations, Locations, setUserLocations, userLocations }) => {
  const loggedInUser = useContext(UserContext);
  const user = loggedInUser.username;

  const handlePress = () => {
      postNewLocation(
        {name: locationData.display_name, coordinates: [locationData.lon, locationData.lat] }
      ).then((response) => {
        addToBucketList(user, response)
      })
    }

  return (
    <TouchableOpacity
      style={styles.add}
      onPress={handlePress}
    >
      <Text>Add To Your Bucket List</Text>
    </TouchableOpacity>

  );
};
const styles = StyleSheet.create({
  add: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#444444',
    borderRadius: 10,
    marginTop: 20,
  },
});
export default AddToBucket;
