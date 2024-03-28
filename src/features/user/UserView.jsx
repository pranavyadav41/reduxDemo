import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {fetchUsers} from './userSlice'

const UserView = () => {
  const users=useSelector((state)=>state.user.users)
  const loading=useSelector((state)=>state.user.loading)
  const error=useSelector((state)=>state.user.error)
  const dispatch=useDispatch()
  return (
    <div>
      <h2>List of Users:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li style={{color:"white"}} key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <button onClick={() => dispatch(fetchUsers())}>Get Users</button>
    </div>
  )
}

export default UserView
