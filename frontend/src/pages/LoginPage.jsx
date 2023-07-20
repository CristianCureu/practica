import { Link } from "react-router-dom";
import Button from "../components/Button";
<<<<<<<< < Temporary merge branch 1
import { useState, useEffect } from "react";
=========
import { useState} from "react";
>>>>>>>>> Temporary merge branch 2
import Input from "../components/Input";

const BASE_URL = "http://localhost:8080/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/loginUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const responseText = await response.text();
      console.log(responseText);
      if (response.status === 200) {
        console.log("success");
        alert("Login reusit... navigare pe pagina HOME");
<<<<<<<<< Temporary merge branch 1
        navigate("/");
=========
        navigate("/home");
>>>>>>>>> Temporary merge branch 2
      } else {
        setError(responseText);
      }
    } catch (error) {
      console.log(error);
    }
  };

<<<<<<<<< Temporary merge branch 1
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="flex w-full justify-center p-4">
      <form className="flex flex-col items-center justify-around border w-3/4 h-96 px-2">
        <Input
          placeholder="email"
          name="email"
          type="email"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
        <Input
          placeholder="password"
=========
  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  return (
    <div className="flex w-full justify-center p-20">
      <form className="flex flex-col items-center justify-around border w-1/2 h-96 px-2">
        <h1 className="text-2xl font-bold">Log in</h1>
        <Input
          className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500 lg:w-2/4"
          placeholder="Email"
          name="email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
        <Input
          className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500 lg:w-2/4"
          placeholder="Password"
>>>>>>>>> Temporary merge branch 2
          name="password"
          type="password"
          onChange={(e) => onChange(e.target.name, e.target.value)}
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
