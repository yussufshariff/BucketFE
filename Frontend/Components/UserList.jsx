import {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import { React, useState, useContext, useEffect } from 'react';
import UserContext from '../Contexts/userContext';
import { getListByUser, deleteFromList, toggleVisited } from '../Utils/api';

const UserList = ({ navigation }) => {
  const loggedInUser = useContext(UserContext);
  const [userList, setUserList] = useState([]);
console.log(userList);
  useEffect(() => {
    getListByUser(loggedInUser.username).then(({ data }) => {
      setUserList(data.userList);
    });
  }, []);

  const locationData = userList.map((location) => {
    return location;
  });

  function locationNameFormatter(location) {
    const splitLocation = location.name.split(',');
    return splitLocation[0] + ',' + splitLocation.slice(-1);
  }

  const imageUrl = loggedInUser.profile_picture;

  const header = () => {
    return (
      <View style={styles.header_style}>
        <Image
          style={styles.avatar}
          source={{
            uri: imageUrl,
          }}
        />
        <Text style={styles.name}>{loggedInUser.username}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={locationData}
      renderItem={({ item }) => (
        <Text
          onPress={() => {
            console.log(item);
            navigation.navigate('AddLocation', { location: item });
          }}
          style={styles.item_style}
        >
          {locationNameFormatter(item)}
          <Pressable
            style={styles.deleteButton}
            onPress={() => {
              Alert.alert(
                'Are you sure?',
                '',
                [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: (input) => {
                      deleteFromList(loggedInUser.username, item.name).then(
                        () => {
                          getListByUser(loggedInUser.username).then(
                            ({ data }) => {
                              setUserList(data.userList);
                            }
                          );
                        }
                      );
                    },
                  },
                ],
                'plain-text'
              );
            }}
          >
            <Text>Delete</Text>
          </Pressable>
          <Pressable
            style={
              item.hasVisited === true
                ? styles.visitedButtonTrue
                : styles.visitedButtonFalse
            }
            onPress={() => {
              toggleVisited(loggedInUser.username, item.name).then(() => {
                console.log('visited')
                getListByUser(loggedInUser.username).then(({ data }) => {
                  setUserList(data.userList);
                });
              });
            }}
          >
            <Text>Visited</Text>
          </Pressable>
        </Text>
      )}
      ListHeaderComponent={header}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  title: {
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
  },
  images: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    margin: 5,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    margin: 10,
  },
  name: {
    fontSize: 22,
    color: 'black',
    fontyWeight: '600',
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
    padding: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container_style: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item_style: {
    backgroundColor: '#6699FF',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header_style: {
    textAlign: 'center',
    backgroundColor: '#B2C2D2',
    padding: 20,
    fontSize: 20,
    alignItems: 'center',
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  visitedButtonTrue: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
  },
  visitedButtonFalse: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
});
export default UserList;
