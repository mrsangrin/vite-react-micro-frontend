import { useFetchUsers } from "../hooks/useFetchUsers";

const Users = () => {    
  const { users } = useFetchUsers();
  return (
    <>
      <h2>Users</h2>
      <ul>
        { 
          users.map( (user) => 
            <li key={user.id}> {user.name } - {user.email} </li>  
          )
        }
      </ul>      
    </>
  )
}

export default Users;