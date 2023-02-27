import axios from "axios";

const request = axios.create({
  baseURL: "https://red-muddy-woodpecker.cyclic.app/api",
});

export const getAllLocations = () => {
  return request.get("/locations", {}).then(({ data: { locations } }) => {
    return locations;
  });
};

export const postNewUser = (newUser) => {
  return request.post("/users", newUser).then(( data ) => {
    console.log(data);
    // return user;
  })
}