import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./Components/HomePage";
import AddLocation from "./Components/AddLocation";
import UserCard from "./Components/UserCard";
import UserDetails from "./Components/UserDetails";
import CarouselCards from "./Components/CarouselCards";
import { StyleSheet } from "react-native";

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
          styles={styles.container}
          name="LocationDetails"
          component={CarouselCards}
          options={{ title: "Location Details" }}
        />
      </Stack.Navigator>
      <UserCard />
    </NavigationContainer>
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
