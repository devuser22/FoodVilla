import { useContext } from "react";
import UserContext from "./UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-neutral-600 text-white p-10 mt-5 flex flex-col place-items-center">
      <p className="font-thin text-sm  from-neutral-300">
        {" "}
        Copyright &copy; 2023 -Sunrise Cafe
      </p>
    </div>
  );
};

export default Footer;
