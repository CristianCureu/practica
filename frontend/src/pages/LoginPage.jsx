import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

 const LoginPage = ()=>{

    const [email,setEmail ] = useState("");
    const [password,setPassword ] = useState("");
    const [error,setError ] = useState("");

    const handleSubmit= async (e) =>{

        e.preventDefault();
        
        try{
            const response= await fetch(process.env.REACT_APP_URL+ "login/api",{
                method:"POST",
                headers:{
                    "Content-Typr":"application/json",
                },
                body: JSON.stringify({email, password})
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
            
            <div> "Contless"? <Link  className="text-red-500" to="/register"> <p>Înregistrare.</p></Link></div>
       </form>
       {error && <div className="text-red-600"> {error}</div>}
        
    </div>
    
} 

export default LoginPage;