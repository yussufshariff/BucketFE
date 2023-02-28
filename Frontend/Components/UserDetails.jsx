import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import { React, useState, useContext, useEffect } from "react";
import UserContext from "../Contexts/userContext";
import { getListByUser } from "../Utils/api";

const UserDetails = () => {
  const loggedInUser = useContext(UserContext);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getListByUser(loggedInUser.username).then(({ data }) => {
      setUserList(data.userList)
    })
  }, [])


  const [images, setImages] = useState([
    "https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
    "https://media.istockphoto.com/id/1077250290/es/foto/pirámides.jpg?s=612x612&w=0&k=20&c=nxF4cIb0fXi2J6RvllZTCVvIBfDimxZkvSyv70yAU5c=",
    "https://media.istockphoto.com/photos/view-of-machu-picchu-as-seen-from-the-inca-trail-picture-id832447662?b=1&k=20&m=832447662&s=612x612&w=0&h=BVWOArRQbDaq8HUWfVwVT6TCQq0ViluBZbmSCju7cJc=",
  ]);

  const locationNames = userList.map((location) => {
    return location.name
  })

  function locationNameFormatter(location) {
    const splitLocation = location.split(',')
    return splitLocation[0]  + "," + splitLocation.slice(-1)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuMcdJhJZHRE-tbIGP-Vzn6CQiMS35Vu2Ow&usqp=CAU",
            }}
          />
          <Text style={styles.name}>{loggedInUser.username}</Text>
        </View>
      </View>
      <View style={styles.contanier_style}>
        <Text style={styles.header_style}>Bucket List</Text>
        <FlatList
          data={locationNames}
          renderItem={({ item }) => (
            <Text style={styles.item_style}>{locationNameFormatter(item)}</Text>
          )}
        />
      </View>
    </ScrollView>
  );
};
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
  header: {
    backgroundColor: "white",
    alignItems: "center",
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
  headerContent: {
    alignItems: "center",
  },
  body: {
    alignItems: "center",
    padding: 30,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: "33%",
    padding: 5,
  },
  image: {
    width: "100%",
    height: 120,
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
  },
});
export default UserDetails;
