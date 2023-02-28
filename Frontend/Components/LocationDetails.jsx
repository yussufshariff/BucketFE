import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

function LocationDetails({ locationData }) {
  console.log(locationData);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.add}
      onPress={() => navigation.navigate("LocationDetails")}
    >
      <Text>Read More</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  add: {
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

export default LocationDetails;
