import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
//we can rename the identifier while importing without exporting with the same name from the js file
//import Profile from "./ProfileClass";
import Profile from "./Profile";

// const About = () => {
//   return (
//     <div>
//       <h1>About us Page</h1>
//       <p> This is the about us - Chapter 07</p>
//       <ProfileFunctionalComponent name={"Ajeet"} />
//       {/* <Outlet /> */}
//       <Profile name={"Ajeet Verma"} age={32} />
//     </div>
//   );
// };

class About extends React.Component {
  render() {
    return (
      <div>
        <h1> This is about us page</h1>
        <Profile />
      </div>
    );
  }
}
export default About;
