import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./Components/HomePage";
import List from "./Components/List";
import AddLocation from "./Components/AddLocation";
import UserCard from "./Components/UserCard";
import UserDetails from "./Components/UserDetails";
import LocationCard from "./Components/LocationCard";
import LocationDetails from "./Components/LocationDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen
          name="AddLocation"
          component={AddLocation}
          options={{ title: "Add A Location" }}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{ title: "User Profile" }}
        />
        <Stack.Screen
          name="LocationDetails"
          component={LocationDetails}
          options={{ title: "Location Details" }}
        />
      </Stack.Navigator>
      <UserCard />
    </NavigationContainer>
  );
}