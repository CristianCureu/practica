<<<<<<< HEAD
import { useCallback, useState } from "react";
import Button from "../components/Button";

=======
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
const RegisterPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });
  const [error, setError] = useState("");
>>>>>>> main

 const RegisterPage = ()=>{

    const [user, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        passwordRepeat: "",
      });
      const [error, setError] = useState("");
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch( `${process.env.REACT_APP_BASE_URL}`+"/registerUser",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
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
    
    
    return <div className="grid place-items-center p-20">
    
        <form className="flex flex-col items-center justify-around bordered p-5 gap-5 marg shadow-md"  action="" method="post">
            <input 
            type="text" 
            className="w-250"
            name="" 
            placeholder="Name " 
            required 
            autoComplete="off"
            onChange={(e)=>setUserData({...user,name:e.target.value})} />
    

<<<<<<< HEAD
            <input 
                type="text" 
                className="w-250"
                name="" 
                placeholder="Email" 
                required 
                autoComplete="off"
                onChange={(e)=>setUserData({...user,email:e.target.value})} />

            <input 
                type="password" 
                className="w-250"
                name="" 
                placeholder="Password " 
                required 
                autoComplete="off"
                onChange={(e)=>setUserData({...user,password:e.target.value})} />

            <input 
                type="password" 
                className="w-250"
                name="" 
                placeholder="Password again" 
                required 
                autoComplete="off"
                onChange={(e)=>setUserData({...user,passwordRepeat:e.target.value})} />
        
            <Button text="Înregistrare !@#!@#%" onClick={handleSubmit}></Button>
        </form>
     
        {error && <div className="text-red-600"> {error}</div>}
=======
  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  return (
    <div className="flex w-full justify-center py-20">
    <form className="flex flex-col items-center justify-around border w-2/4 h-96 px-2">
        <h1 className="text-2xl font-bold">Register</h1>
        <Input
          className=" w-2/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-indigo-600"
          type="text"
          placeholder="Name"
          required
          autoComplete="off"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <Input
          className="w-2/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-indigo-600"
          type="text"
          placeholder="Email"
          required
          autoComplete="off"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <Input
          className="w-2/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-indigo-600"
          type="text"
          placeholder="Password"
          required
          autoComplete="off"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <Input
          className="w-2/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-indigo-600"
          type="text"
          placeholder="Confirm password"
          required
          autoComplete="off"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <Button bgColor="bg-green-400" text="register" onClick={handleSubmit} />
        {error ? <div className="text-red-600">Please complete all field!</div> : null}
    </form>
>>>>>>> main
    </div>
    
} 

export default RegisterPage;
