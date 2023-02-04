import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Ajeet Verma",
    email: "ajeet57@gmail.com",
  },
});

export default userContext;
