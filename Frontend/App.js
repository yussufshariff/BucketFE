import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Components/HomePage';
import NewUserForm from './Components/NewUserForm';
import UserContext from './Contexts/userContext';
import LocationContext from './Contexts/locationContext';
import LocationDetails from './Components/LocationDetails';
import Tab from './Components/Tab'

const Stack = createNativeStackNavigator();

export default function App() {
  const [settingUser, setSettingUser] = useState({});
  const [settingLocation, setSettingLocation] = useState({});
  console.disableYellowBox = true;

  const userSettings = {
    bucket_list: [],
    _id: settingUser._id,
    username: settingUser.username,
    email: settingUser.email,
    password: settingUser.password,
    profile_picture: settingUser.profile_picture,
    setSettingUser,
  };

  const locationSettings = {
    _id: settingLocation.id,
    name: settingLocation.name,
    coordinates: settingLocation.coordinates,
    setSettingLocation,
  };

  return (
    <LocationContext.Provider value={locationSettings}>
      <UserContext.Provider value={userSettings}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name='Home'
              component={HomePage}
              options={{ title: 'Welcome' }}
            />
              <Stack.Screen
              name="AddLocation"
              component={Tab}
            />
           <Stack.Screen
              name='LocationDetails'
              component={LocationDetails}
              options={{ title: 'Location Details' }}
            />
          <Stack.Screen
              name='NewUserForm'
              component={NewUserForm}
              options={{ title: 'Create New User' }}
            /> 
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </LocationContext.Provider>
  );
}
