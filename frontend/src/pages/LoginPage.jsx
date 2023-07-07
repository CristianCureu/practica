import { useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input";

 const LoginPage = ()=>{
    const navigate=useNavigate();
    const [userData,setUserData ] =  useState({
        email: "",
        password: ""
    });

    const setUserDataProxy = (field, value) => {
        setUserData({...userData, [field]:value});
    }

    const [error,setError ] = useState("");

    const handleSubmit= async (e) =>{

        e.preventDefault();
        
        try{
            const response= await fetch(process.env.REACT_APP_URL+"/loginUser",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(userData)
            })
            const responseText = await response.text()
            console.log(responseText);
            if(response.status===200){
                console.log("succes")
                navigate("/")
            }
            else{
                setError(responseText);
            }
            

        }catch(error){
            console.log(error);
        }
    }
    
    return <div className="grid place-items-center p-20">
        <form className="flex flex-col items-center justify-around bordered p-5 gap-5 marg shadow-md"  action="" method="post">

            <Input 
            name="email"
            placeholder="Email on my own input"
            onChange={setUserDataProxy}
            ></Input>
            
           <Input 
            name="password"
            placeholder="Password on my own input"
            onChange={setUserDataProxy}
            ></Input>
        
            <Button text="Login" onClick={handleSubmit}></Button>
            
            <div> N-ai cont? <Link  className="text-red-500" to="/register"> Înregistrare.</Link></div>
       </form>
       {error && <div className="text-red-600"> {error}</div>}
        
    </div>
    
} 

export default LoginPage;
