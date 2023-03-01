import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function CustomMarkerGWC() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.button}>Great Wall Of China</Text>
    </TouchableOpacity>
  );
}

function CustomMarkerTM() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.button}>Taj Mahal</Text>
    </TouchableOpacity>
  );
}
function CustomMarkerMP() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.button}>Machu Pichu</Text>
    </TouchableOpacity>
  );
}
function CustomMarkerColo() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.button}>The Colosseum</Text>
    </TouchableOpacity>
  );
}
function CustomMarkerCRS() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.button}>Christ the Redeemer</Text>
    </TouchableOpacity>
  );
}
function CustomMarkerPetra() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.button}>Petra</Text>
    </TouchableOpacity>
  );
}
function CustomMarkerCI() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.button}>Chichen Itza</Text>
    </TouchableOpacity>
  );
}
//styles for our custom marker.
const styles = StyleSheet.create({
  button: {
    color: "#ffffff",
    fontSize: 7,
    fontWeight: "bold",
    textAlign: "center",
    padding: 2,
    backgroundColor: "#444444",
    borderRadius: 5,
    marginTop: 1,
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
