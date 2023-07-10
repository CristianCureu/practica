import { useEffect, useState } from "react"


const Users = () =>{
   

    useEffect(()=>{
        const getUsers = async () => {
            try{
            const users= await fetch(`${process.env.REACT_APP_URL}`+"/query",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body : JSON.stringify({
                    query:"getUsersQuery"
                })
            })
            const usersJson = await users.json()
            console.log(usersJson)
        }
            catch(err){
               console.log("Get users error:" + err);
            }
        }    
   
        getUsers();
   
    },[])
    


    return <div>

    </div>  
     
    

}
export default Users;
