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
  
  useEffect(() => {
    getListByUser(loggedInUser.username).then(({ data }) =>{
      if(typeof data.userList === 'object')setUserList(data.userList) 
    })
  }, [])

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
        <Text style={styles.user_name}>{loggedInUser.username}</Text>
      </View>
    );
  };
  return (
    <FlatList
    styles={styles.container}
      data={locationData}
      renderItem={({ item }) => (
        <View style={styles.container}>
        <View style={styles.item_style}> 
        <Text style={styles.title}>
          {locationNameFormatter(item)}
          </Text>
          </View>
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
        </View>
      )}
      ListHeaderComponent={header}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    textAlign: 'center',
    flex: 0.5,
    padding: 10,
  },

  title: {
    textAlign: 'center',
    fontSize: 15,
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
    fontSize: 5,
    color: 'black',
    fontyWeight: '600',
    alignItems: 'center',
  },
  user_name: {
    fontSize: 35,
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
    borderRadius: 10,
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
    backgroundColor: '#f44336',
    width: 200,
    height: 40,
    marginHorizontal: 75,
  },
  visitedButtonTrue: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4caf50',
    width: 200,
    height: 40,
    marginVertical: 10,
    marginHorizontal: 75,
  },
  visitedButtonFalse: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#e7e7e7',
    width: 200,
    height: 40,
    marginVertical: 10,
    marginHorizontal: 75,
  },
});
export default UserList;
