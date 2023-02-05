import Title from "./Title";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />

      <div className="nav-items">
        <ul className="flex py-10">
          <li>
            <span className=" p-5 text-red-800 font-bold mr-8">
              {user.name}
            </span>
          </li>
          <li className="px-2">
            <Link to="/">Home </Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">Cart</li>

          <li className="px-2">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
