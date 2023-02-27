import { StyleSheet, View, Text, Button, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllLocations } from "../Utils/api";
export default HomePage = ({ navigation }) => {

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [test, setTest] = useState([]);
  
  const performSearchUser = async (user) => {
    axios
      .get(`https://red-muddy-woodpecker.cyclic.app/api/users/${username}`)
      .then((userFound) => {
        if (userFound.password === password) {
          setUser(user);
          navigation.navigate('AddLocation');
        } else return 'Incorrent username or password';
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/logo_transparent.png')}
      />
      <TextInput
        style={styles.searchBar}
        placeholder='Username'
        value={setUser}
        onChangeText={(username) => setUsername(username)}
        onSubmitEditing={performSearchUser}
      />
      <TextInput
        style={styles.searchBar}
        placeholder='Password'
        value={setPassword}
        onChangeText={(password) => setPassword(password)}
        onSubmitEditing={checkPassword}
      />

      <Button
        style={styles.loginButton}
        title='Login'
        onPress={() => performSearchUser()}
      />
      <Button
        title='Create new User'
        onPress={() => navigation.navigate('NewUserForm')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
  },
  searchBar: {
    borderRadius: 10,
    margin: 10,
    color: '#000',
    borderColor: '#666',
    backgroundColor: '#FFF',
    borderWidth: 1,
    height: 45,
    width: 200,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  loginButton: {
    width: 200,
    height: 45,
    backgroundColor: '#FFFAFA',
  },
  text: {
    textAlign: "center",
    marginTop: 50,
  },
});
