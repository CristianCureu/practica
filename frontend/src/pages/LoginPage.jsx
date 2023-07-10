import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import input from "../components/input";
//import Input from "../components/input";
 
import sql from "../services/SqlService";

const BASE_URL = "http://localhost:80/api";
 
const LoginPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  useEffect(() => {
    sql.query('test');
  }, []);
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
      if (response.status === 200) {
        console.log("success");
        alert('Login reusit... navigare pe pagina HOME');
        navigate('/home');
      } else {
        setError(responseText);
      }
    } catch (error) {
      console.error(error);
    }
  };
 
  useEffect(() => {
    console.log(userData);
  }, [userData]);
 
  return (
    <div className="flex w-full justify-center p-4">
      <form className="flex flex-col items-center justify-around border w-3/4 h-96 px-2">
        <input
          className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
          type="text"
          placeholder="email"
          required
          autoComplete="off"
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
        />
        <input
          className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
          type="password"
          placeholder="password"
          required
          autoComplete="off"
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
          }}
        />
        {/* <Input name="ce vreau"/> */}
        <Button text="Login" onClick={handleSubmit} />
        <div className="flex text-lg">
          <p>Nu ai cont?</p>
          <Link className="ml-2 underline text-blue-500" to="/register">
            Register page
          </Link>
        </div>
        {error ? <div className="text-red-600">{error}</div> : null}
      </form>
    </div>
  );
};
 
export default LoginPage;