import axios from 'axios';

const request = axios.create({
  baseURL: 'https://red-muddy-woodpecker.cyclic.app/api',
});

export const getAllLocations = () => {
  return request.get('/locations').then(({ data: { locations } }) => {
    return locations;
  });
};

export const getListByUser = (username) => {
  return request.get(`/users/${username}/list`).then((response) => {
    return response;
  });
};

export const postNewUser = async (newUser) => {
  return request.post('/users', newUser).then((response) => {
    return response.data.newUser;
  });
};

export const patchProfilePic = (user, img) => {
  return request.patch(`/user/${user}/profilepicture`, {img})
}

export const postNewLocation = (newLocation) => {
    return request.post('/locations', newLocation).then(({config}) => {
      console.log(config.data, 'config')
      return config.data
    });
};

export const addToBucketList = (username, body) => {
  return request.patch(`/${username}/list`, JSON.parse(body)).then((response) => {
    console.log(response)
  })
}