import { useCallback, useState } from "react";
import Button from "../components/Button";


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
          const response = await fetch( `${process.env.REACT_APP_URL}`+"/registerUser",
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
    </div>
    
} 

export default RegisterPage;
