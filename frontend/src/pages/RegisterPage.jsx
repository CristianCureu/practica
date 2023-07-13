import { useState } from "react";
import Button from "../components/Button";
 
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/registerUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, passwordRepeat }),
        }
      );
      const resposneText = await response.text();
      console.log(response);
      if (response.status === 201) {
        console.log("success");
      } else {
        setError(resposneText);
      }
    } catch (error) {
      console.log("RegisterPage::handleSubmit::", error.message);
    }
  };
 
  return (
<<<<<<< HEAD
    <div className="flex w-full justify-center py-20">
    <form className="flex flex-col items-center justify-around border w-2/4 h-96 px-2">
        <h1 className="text-2xl font-bold">Register</h1>
        <Input
          className=" w-2/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-indigo-600"
=======
    <div className="flex w-full  justify-center p-4">
      <form className="flex flex-col items-center justify-around border-gray-200 border-2 rounded-md w-3/4 lg:w-2/4 h-96">
        <input
          className=" lg:w-3/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
>>>>>>> 150672eb5f561d04eac58bb820ee938d8c79c6ce
          type="text"
          placeholder="Name"
          required
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
        />
<<<<<<< HEAD
        <Input
          className="w-2/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-indigo-600"
=======
        <input
          className=" lg:w-3/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
>>>>>>> 150672eb5f561d04eac58bb820ee938d8c79c6ce
          type="text"
          placeholder="Email"
          required
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />
<<<<<<< HEAD
        <Input
          className="w-2/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-indigo-600"
          type="text"
=======
        <input
          className=" lg:w-3/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
          type="password"
>>>>>>> 150672eb5f561d04eac58bb820ee938d8c79c6ce
          placeholder="Password"
          required
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
<<<<<<< HEAD
        <Input
          className="w-2/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-indigo-600"
          type="text"
=======
        <input
          className=" lg:w-3/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
          type="password"
>>>>>>> 150672eb5f561d04eac58bb820ee938d8c79c6ce
          placeholder="Confirm password"
          required
          autoComplete="off"
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
        <Button text="register" onClick={handleSubmit} />
<<<<<<< HEAD
        {error ? <div className="text-red-600">Please complete all field!</div> : null}
    </form>
=======
        {error ? <div className="text-red-600">{error}</div> : null}
      </form>
>>>>>>> 150672eb5f561d04eac58bb820ee938d8c79c6ce
    </div>
  );
};
 
export default RegisterPage;