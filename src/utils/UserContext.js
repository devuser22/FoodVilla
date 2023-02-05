import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Ajeet Verma",
    email: "ajeet57@gmail.com",
  },
});

export default UserContext;
