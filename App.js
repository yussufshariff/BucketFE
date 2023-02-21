import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from "./Components/HomePage";
import List from "./Components/List"
import AddLocation from "./Components/AddLocation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
         <Stack.Navigator>
          <Stack.Screen 
          name="Home"
          component={HomePage}
          options={{title: "Welcome"}}
          />
          <Stack.Screen  
          name="List"
          component={List}
          />
          <Stack.Screen 
          name="AddLocation"
          component={AddLocation}
          options={{title: "Add A Location"}}
          />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

