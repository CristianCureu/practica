import { useState } from "react";
import Button from "../components/Button";


 const RegisterPage = ()=>{
    user= {
        name: "",
        email: "",
        password: "",
        check_password: "",
        error: ""
    };
    const [user,setUserData ] = useState("");
    
    const [name,setName ] = useState("");
    const [email,setEmail ] = useState("");
    const [password,setPassword ] = useState("");
    const [check_password,setCheckPassword ] = useState("");
    const [error,setError ] = useState("");

    const handleRegister= async (e) =>{

        e.preventDefault();
        try{
            const response= await fetch(process.env.REACT_APP_URL+ "register/api",{
                method:"POST",
                headers:{
                    "Content-Typr":"application/json",
                },
                body: JSON.stringify({name, email, password})
            }) 
            console.log(response.text);
            if(response.status===200){
                console.log("succes")
            }
            else{
                setError(response.text);
            }
            

        }catch(error){
            setError("Err");
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
            onChange={(e)=>setName(e.target.value)} />
    

            <input 
                type="text" 
                className="w-250"
                name="" 
                placeholder="Email" 
                required 
                autoComplete="off"
                onChange={(e)=>setEmail(e.target.value)} />

            <input 
                type="password" 
                className="w-250"
                name="" 
                placeholder="Password " 
                required 
                autoComplete="off"
                onChange={(e)=>setName(e.target.value)} />

            <input 
                type="password" 
                className="w-250"
                name="" 
                placeholder="Password again" 
                required 
                autoComplete="off"
                onChange={(e)=>setPassword(e.target.value)} />
            
        </form>
        <Button text="Înregistrare !@#!@#%" onClick={handleRegister}></Button>
        
    </div>
    
} 

export default RegisterPage;