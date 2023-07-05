import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const BASE_URL= "http://localhost/login/api"
 const LoginPage = ()=>{

    const [email,setEmail ] = useState("");
    const [password,setPassword ] = useState("");
    const [error,setError ] = useState("");

    const handleSubmit= async (e) =>{

        e.preventDefault();
        try{
            const response= await fetch(`${BASE_URL}/loginUser`,{
                method:"POST",
                headers:{
                    "Content-Typr":"application/json",
                },
                body: JSON.stringify({email, password})
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
            name="" 
            id="credential_alias" 
            placeholder="Email" 
            required 
            autoComplete="off"
            onChange={(e)=> setEmail(e.target.value)}
            />
           
            <input type="password" 
            name="" 
            id="credential_passcode" 
            placeholder="Password" 
            required autoComplete="off" 
            onChange={(e)=> setPassword(e.target.value)}
            />
            
            <Button text="Login" onClick={handleSubmit}></Button>
            
            <div> "Contless"? <Link to="/register">Înregistrare.</Link></div>
       </form>
       {error && <div className="text-red-600"> {error}</div>}
        
    </div>
    
}

export default LoginPage;