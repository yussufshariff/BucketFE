import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function CustomMarkerGWC() {
  return (
    <View style={styles.marker}>
      <TouchableOpacity>
        <Text style={styles.color}>Great Wall Of China</Text>
      </TouchableOpacity>
    </View>
  );
}

function CustomMarkerTM() {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>Taj Mahal</Text>
    </View>
  );
}
function CustomMarkerMP() {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>Machu Pichu</Text>
    </View>
  );
}
function CustomMarkerColo() {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>The Colosseum</Text>
    </View>
  );
}
function CustomMarkerCRS() {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>Christ the Redeemer Statue</Text>
    </View>
  );
}
function CustomMarkerPetra() {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>Petra</Text>
    </View>
  );
}
function CustomMarkerCI() {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>Chichen Itza</Text>
    </View>
  );
}
//styles for our custom marker.
const styles = StyleSheet.create({
  marker: {
    position: "absolute",
    paddingVertical: 2,
    paddingHorizontal: 2,
    backgroundColor: "#007bff",
    borderColor: "#eee",
    borderRadius: 40,
    elevation: 2,
  },
  text: {
    color: "#fff",
  },
});

module.exports = {
  CustomMarkerGWC,
  CustomMarkerTM,
  CustomMarkerMP,
  CustomMarkerCI,
  CustomMarkerCRS,
  CustomMarkerColo,
  CustomMarkerPetra,
};
