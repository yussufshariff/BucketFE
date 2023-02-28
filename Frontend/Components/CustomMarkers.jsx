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
  // marker: {
  //   paddingVertical: 2,
  //   paddingHorizontal: 4,
  //   backgroundColor: "#007bff",
  //   borderColor: "#eee",
  //   borderRadius: 10,
  //   elevation: 5,
  // },
  text: {
    color: "#fff",
  },
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
    color: "#FFFFFF",
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
