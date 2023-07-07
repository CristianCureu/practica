import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";
 

 
const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/loginUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
      const responseText = await response.text();
      console.log(responseText);
      if (response.status === 200) {
        console.log("success");
      } else {
        setError(responseText);
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
    console.log("email: ", email);
    console.log("password: ", password);
  }, [email, password]);
 
  return (
    <div className="flex w-full  justify-center p-4">
      <form className="flex flex-col items-center justify-around border-gray-200 border-2 rounded-md w-3/4 lg:w-2/4 h-96">
        <input
          className=" lg:w-3/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
          type="text"
          placeholder="Email"
          required
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="lg:w-3/4 border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
          type="password"
          placeholder="Password"
          required
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Login" onClick={handleSubmit} />
        <div className="flex text-lg">
          <p>Nu ai cont?</p>
          <Link className="ml-2 underline text-blue-500" to="/register">
            Înregistrează-te
          </Link>
        </div>
        {error ? <div>{error}</div> : null}
      </form>
    </div>
  );
};
 
export default LoginPage;