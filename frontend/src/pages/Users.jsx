import { useEffect } from "react";

const Users = () => {
    const [users, setuSERS] = useState([])

    useEffect(()=>{
        const getUsers = async () => {
            try{

            const users = await fetch(`$(process.env.REACT_APP_BASE_URL))/query`, {
                method: "POST",
                body: {
                    query: 'getUsersQuery'
                }
            } } catch(error) {
                console.log("Users::getUsers::", error)
            }
        }
    }, [])
    return(
        <div>
            
        </div>
    )
}

export default Users;