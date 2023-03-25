import { useEffect, useState } from "react";

export const useFetchUsers = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersData = await usersResponse.json(); 
        setUsers(usersData);
    };

    useEffect(() => {
      getUsers();
    }, []);

    return { users };
};
