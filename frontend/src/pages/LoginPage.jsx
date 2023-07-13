import { Link } from "react-router-dom";
import Button from "../components/Button";
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState} from "react";
import Input from "../components/Input";
>>>>>>> 150672eb5f561d04eac58bb820ee938d8c79c6ce

const BASE_URL = "http://localhost:8080/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

<<<<<<< HEAD
=======
  const onChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

>>>>>>> 150672eb5f561d04eac58bb820ee938d8c79c6ce
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/loginUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const responseJson = await response.json();
      console.log(responseJson);
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
  return (
    <div className="flex w-full justify-center p-4">
      <form className="flex flex-col items-center justify-around border w-3/4 h-96">
        <input
          className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
          type="text"
          placeholder="email"
          required
          autoComplete="off"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
          type="password"
          placeholder="password"
          required
          autoComplete="off"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button text="Login" onClick={handleSubmit} />
        <div className="flex text-lg">
          <p>Nu ai cont?</p>
          <Link className="ml-2 underline text-blue-500" to="/register">
            Register page
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;