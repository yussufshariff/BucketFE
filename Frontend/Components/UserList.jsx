import {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { React, useState, useContext, useEffect } from "react";
import UserContext from "../Contexts/userContext";
import { getListByUser } from "../Utils/api";

const UserList = () => {
  const loggedInUser = useContext(UserContext);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getListByUser(loggedInUser.username).then(({ data }) => {
      setUserList(data.userList)
    })
  }, [])

  const locationNames = userList.map((location) => {
    return location.name
  })

  function locationNameFormatter(location) {
    const splitLocation = location.split(',')
    return splitLocation[0] + "," + splitLocation.slice(-1)
  }

  const imageUrl = loggedInUser.profile_picture;

  const header = () => {
    return <View style={styles.header_style}>
      <Image
        style={styles.avatar}
        source={{
          uri: imageUrl
        }}
      />
      <Text style={styles.name}>{loggedInUser.username}</Text>
    </View>
  }

  return (
    <FlatList
      data={locationNames}
      renderItem={({ item }) => (
        <Text style={styles.item_style}>{locationNameFormatter(item)}</Text>
      )}
      ListHeaderComponent={header}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    padding: 10,
  },
  images: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    margin: 5,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    margin: 10,
  },
  name: {
    fontSize: 22,
    color: "black",
    fontyWeight: "600",
    alignItems: "center",
  },
  body: {
    alignItems: "center",
    padding: 30,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container_style: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item_style: {
    backgroundColor: "#6699FF",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header_style: {
    textAlign: "center",
    backgroundColor: "#B2C2D2",
    padding: 20,
    fontSize: 20,
    alignItems: "center"
  },
});
export default UserList;
