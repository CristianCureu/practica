// import { stringify } from "json5";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetch(`${process.env.REACT_APP_BASE_URL}/query`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: "getUsersQuery",
          }),
        });
        const usersJson = await users.json();
        setUsers(usersJson);

        console.log(usersJson);
      } catch (error) {
        console.log("Users::getUsers::", error);
      }
    };
    getUsers();
  }, []);



  const rowFactory = () => {
    return (users.map((user)=>(
    <tr>
      <td className=" text-white  bg-gradient-to-l from-orange-400 to-pink-500 transition-shadow duration-300 px-20 shadow-md hover:shadow-lg " >
        {user.name}&nbsp;&nbsp;  {user.email}
      </td>
    </tr>
    )))
    
    
};


  return (
  <div className="flex flex-row justify-center px-5 mt-10"> 
    <table >
      <thead>
        <tr><th>USERS</th></tr>
      </thead>  
      <tbody>
      {rowFactory()}
      </tbody>
    </table>
  </div>

  );
};

export default Users;