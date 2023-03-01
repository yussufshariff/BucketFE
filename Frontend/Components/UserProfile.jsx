import { Image, View, StyleSheet, } from 'react-native';
import React, { useContext } from 'react';
import UserContext from "../Contexts/userContext";

export default function UserProfile() {
    const loggedInUser = useContext(UserContext);
    return (
        <View>
            <Image source={loggedInUser.profile_picture} style={styles.profilePicture}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    profilePicture: {
        width: 35,
        height: 35,
        borderRadius: 24,
        marginRight: 16,
    }
})  