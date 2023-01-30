import { useState } from "react";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [displayMsg, setDisplayMsg] = useState("");
  const handleLoginId = (e) => {
    setLoginId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      loginId.toLowerCase() === "admin" &&
      password.toLowerCase() === "admin"
    ) {
      setDisplayMsg("Login is successfull !!");
    } else {
      setDisplayMsg("Please re-try login !!");
    }
  };

  return (
    <div
      className=" my-10 p-10 flex
    justify-center bg-gray-200"
    >
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Login ID
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={loginId}
            onChange={handleLoginId}
          />
        </div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={password}
          onChange={handlePassword}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-3"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <span className="py-2 border font-bold ml-4 p-2 ">{displayMsg}</span>
      </form>
    </div>
  );
};

export default Login;
