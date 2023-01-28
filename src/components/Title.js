import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <img className="h-28 pl-2" alt-text="logo" src={Logo}></img>
    </Link>
  );
};

export default Title;
