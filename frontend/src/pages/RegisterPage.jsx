import { useCallback, useState } from "react";
import Button from "../components/Button";


 const RegisterPage = ()=>{

    const [user, setUserData] = useState({
        name: "",
        email: "",
        password: ""
      });

    const [error,setError ] = useState("");

    const handleRegister= async (e) =>{

        e.preventDefault();
        console.log(user);

        try{
            const response= await fetch(process.env.REACT_APP_URL+ "register/api",{
                method:"POST",
                headers:{
                    "Content-Typr":"application/json",
                },
                body: JSON.stringify(user)
            }) 
            const responseText = await response.text()
            console.log(responseText);

            if(response.status===200){
                console.log("succes")
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
        />
            <Button text="Înregistrare !@#!@#%" onClick={handleRegister}></Button>
        </form>
     
        {error && <div className="text-red-600"> {error}</div>}
    </div>
    
} 

export default RegisterPage;