import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfile from './UserProfile';
import AddLocation from './AddLocation';
import UserList from './UserList';
import bucket from "../assets/bucket.png"
import mapIcon from "../assets/map-icon.png"
import React, { useContext } from "react";
import UserContext from "../Contexts/userContext";
import { Image, StyleSheet } from 'react-native'

export default function Tab() {
    const loggedInUser = useContext(UserContext);
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={
                { tabBarShowLabel: false }
            }>
            <Tab.Screen
                name='UserList'
                component={UserList}
                options={{
                    title: 'Bucket List',
                    tabBarIcon: () => (<Image source={bucket}
                        style={styles.list}/>)
                }}
            />
            <Tab.Screen
                name='AddLocation'
                component={AddLocation}
                options={{
                    title: 'Locations',
                    tabBarIcon: () => (<Image source ={mapIcon} style={styles.list}/>)
                }}
            />
            <Tab.Screen
                name='UserProfile'
                component={UserProfile}
                options={{
                    title: 'Profile',
                    tabBarIcon: () => (<Image source = {{uri: loggedInUser.profile_picture}} style={styles.profilePicture}/>)
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    list: {
        width: 45,
        height: 45,
    },
});