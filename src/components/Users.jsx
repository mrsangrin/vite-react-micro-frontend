import {useEffect, useState} from 'react'


const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersData = await usersResponse.json();
        console.log(usersData);
        setUsers(usersData);
    };

    useEffect(() => {
      getUsers();
    }, []);
    
    return (
    <>
      <h2>Users</h2>
      <ul>
        { 
          users.map( (user) => 
            <li key={user.id}> {user.name } -> {user.email} </li>  
          )
        }
      </ul>
      
    </>
  )
}

export default Users;