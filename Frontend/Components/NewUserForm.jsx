import React from "react";
import { View, StyleSheet, Button, TextInput, Image } from "react-native";
import { useState } from "react";
import {postNewUser} from "../Utils/api";
import { useContext } from "react";
import UserContext from "../Contexts/userContext";


const NewUserForm = ({ navigation }) => { 
    const myContext = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (username) => {
        setUsername(username);
    }
    const handleEmailChange = (email) => {
        setEmail(email);
    }
    const handlePasswordChange = (password) => {
        setPassword(password);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, email, password);
        const newUser = {username: username, email: email, password: password}

        postNewUser(newUser).then((data) => {
            myContext.setSettingUser(data)
            navigation.navigate('AddLocation');
        })

    }

    return (
      <View style={styles.container}>
        <Image
        style={styles.image}
        source={require("../assets/logo_transparent.png")}
      />
        <TextInput
        style={styles.searchBar}
        placeholder="Username"
        onChangeText={handleUsernameChange}
        value={username}
        />
        <TextInput
        style={styles.searchBar}
        placeholder="Email"
        onChangeText={handleEmailChange}
        value={email}
        />
        <TextInput
        style={styles.searchBar}
        placeholder="Password"
        onChangeText={handlePasswordChange}
        value={password}
        />
        <Button style={styles.loginButton} title="Submit" onPress={handleSubmit} />
      </View>
    )
}

const styles = StyleSheet.create({
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

export default NewUserForm;