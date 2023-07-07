import { useEffect, useState } from "react"


const Users = () =>{
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        const getUsers = async () => {
            try{
            const users= await fetch(process.env.REACT_APP_URL+"/query",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body : JSON.stringify({
                    query:"getUsersQuery"
                })
            })
            const usersJson = await users.json()
            setUsers(usersJson)
            console.log(users)
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
