import { string}
import { useEffect, useState } from "react"

const Users = () =>{
const[users, setUsers] = useState([]);
useEffect() => {
    const getUsser = async() =>{
        try{
            const users = await fetch($(process.env.REACT_APP_BASE_URL}/query',{
                method:'POST',
                body:JSON.stringfy{
                    query: 'getUsersQuery'

                });
                const usersJson = await user.Json()
                console.log(users);


        }catch(error){

            console.log(Users::getUsers::', error);
        }


}
}, [])
return (
    <div>

    </div>
) 

}

export default Users