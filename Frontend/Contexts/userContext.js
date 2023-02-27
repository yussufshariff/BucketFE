// import { createContext, useState, useEffect } from "react";

// export const UserContext = createContext();

// export const UserProvider = (props) => {
//   const [loggedInUser, setLoggedInUser] = useState(() => {
//     const storedUser = localStorage.getItem("user");
//     return storedUser
//       ? JSON.parse(storedUser)
//       : {
//           bucket_list: [],
//           _id: "63f34bbb02b250f7d309bf98",
//           name: "Lee Hamilton",
//           email: "lphamilton87@gmail.com",
//           password: "leepassword",
//           profile_picture:
//             "https://media.licdn.com/dms/image/D5635AQE0AsBTrvPkiw/profile-framedphoto-shrink_200_200/0/1676581699789?e=1677495600&v=beta&t=MVPQD3sxk3hXdStDqnDggvRajq8wDyXY5AGMMMzv3aw",
//         };
//   });

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(loggedInUser));
//   }, [loggedInUser]);

//   return (
//     <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

import React from "react";

const UserContext = React.createContext();
export default UserContext;
