import { Image, View, StyleSheet, } from 'react-native';
import React, { useContext } from 'react';
import UserContext from "../Contexts/userContext";

export default function UserProfile() {
    const loggedInUser = useContext(UserContext);
    const imageUrl = loggedInUser.profile_picture;

    return (
        <View style={styles.header_style}>
            <Image
        style={styles.avatar}
        source={{
          uri: imageUrl
        }}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    profilePicture: {
        width: 35,
        height: 35,
        borderRadius: 24,
        marginRight: 16,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        margin: 10,
      },
      header_style: {
        textAlign: "center",
        backgroundColor: "#B2C2D2",
        padding: 20,
        fontSize: 20,
        alignItems: "center"
      },
})  