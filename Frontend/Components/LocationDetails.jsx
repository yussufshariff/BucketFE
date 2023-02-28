import { Dimensions, Text, View, StyleSheet } from "react-native";

function LocationDetails({ route }) {
  const { locationData } = route.params;

  return (
    <View>
      <Text style={styles.title}>
        {locationData.display_name.replace(/,.*/, "")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    padding: 10,
  },
});

export default LocationDetails;
