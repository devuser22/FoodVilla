import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <img className="logo" alt-text="logo" src={Logo}></img>
    </Link>
  );
};

export default Title;
