import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Inside Set Interval function");
    }, 1000);

    // clear the timer if navigated to another page - using the return function
    return () => {
      clearInterval(timer);
      console.log("Use Effect Return ");
    };
  }, []);

  return (
    <div>
      <h1>
        ----------Profile Functional Component : Name :-{props.name} ----------
      </h1>
      <p>Count value in func comp : {count}</p>
      <button onClick={() => setCount(1)}>Set Count</button>
    </div>
  );
};

export default Profile;
