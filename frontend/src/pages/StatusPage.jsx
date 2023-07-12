// import { stringify } from "json5";
import { useEffect, useState } from "react";

const StatusPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const users= await fetch("http://localhost:80/api/data/status",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          
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

};

export default StatusPage;