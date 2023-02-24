import { StyleSheet, View, Text, Button, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";
export default HomePage = ({ navigation }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const [password, setPassword] = useState(null);
  const performSearchUser = async (user) => {
    // This performs a search of user data
  };
  const checkPassword = async () => {
    if (user.password === password) {
    }
    // This performs a search of user data
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/logo_transparent.png")}
      />
      <TextInput
        style={styles.searchBar}
        placeholder="Username"
        value={setUser}
        onChangeText={(username) => setUser(username)}
        onSubmitEditing={performSearchUser}
      />
      <TextInput
        style={styles.searchBar}
        placeholder="Password"
        value={setPassword}
        onChangeText={(password) => setPassword(password)}
        onSubmitEditing={checkPassword}
      />
      <Button
        style={styles.loginButton}
        title="Login"
        onPress={() => navigation.navigate("AddLocation")}
      />
      <Button
        title="Create new User"
        onPress={() => navigation.navigate("NewUserForm")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 40,
  },
  searchBar: {
    borderRadius: 10,
    margin: 10,
    color: "#000",
    borderColor: "#666",
    backgroundColor: "#FFF",
    borderWidth: 1,
    height: 45,
    width: 200,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  loginButton: {
    width: 200,
    height: 45,
    backgroundColor: "#FFFAFA",
  },
});
