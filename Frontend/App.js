import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./Components/HomePage";
import AddLocation from "./Components/AddLocation";
import UserCard from "./Components/Nav";
import UserList from "./Components/UserList";
import NewUserForm from "./Components/NewUserForm";
import { StyleSheet } from "react-native";
import UserContext from "./Contexts/userContext";
import LocationContext from "./Contexts/locationContext";
import LocationDetails from "./Components/LocationDetails";
import UserProfile from "./Components/UserProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  const [settingUser, setSettingUser] = useState({});
  const [settingLocation, setSettingLocation] = useState({});

  const userSettings = {
    bucket_list: [],
    _id: settingUser.id,
    username: settingUser.username,
    email: settingUser.email,
    password: settingUser.password,
    profile_picture: settingUser.profile_picture,
    setSettingUser,
  };

  const locationSetting = {
    _id: settingLocation.id,
    name: settingLocation.name,
    coordinates: settingLocation.coordinates,
    setSettingLocation,
  };

  return (
    <LocationContext.Provider value={locationSetting}>
    <UserContext.Provider value={userSettings}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="AddLocation"
            component={AddLocation}
            options={{ title: "Add A Location" }}
          />
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={{ title: "Bucket List" }}
          />
          <Stack.Screen
            styles={styles.container}
            name="LocationDetails"
            component={LocationDetails}
            options={{ title: "Location Details" }}
          />
          <Stack.Screen
          name="NewUserForm"
          component={NewUserForm}
          options={{ title: "Create New User" }}
          />
          <Stack.Screen 
          name="UserProfile"
          component={UserProfile}
          options={{title: "Profile"}}
          />
        </Stack.Navigator>
        <UserCard />
      </NavigationContainer>
    </UserContext.Provider>
    </LocationContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
