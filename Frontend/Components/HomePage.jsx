import { StyleSheet, View, Button, TextInput, Image } from "react-native";
import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../Contexts/userContext";

export default HomePage = ({ navigation }) => {
  const myContext = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const performSearchUser = async () => {
    axios
      .get(`https://red-muddy-woodpecker.cyclic.app/api/users/${username}`)
      .then((response) => {
        if (response.data.userData.password === password) {
          myContext.setSettingUser(response.data.userData);
          navigation.navigate("AddLocation");
        } else return "Incorrent username or password";
      })
      .catch((err) => {
        alert("Invalid username or password");
      });
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
        value={setUsername}
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput
        style={styles.searchBar}
        placeholder="Password"
        value={setPassword}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />

      <Button
        style={styles.loginButton}
        title="Login"
        onPress={() => performSearchUser()}
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
  text: {
    textAlign: "center",
    marginTop: 50,
  },
});
