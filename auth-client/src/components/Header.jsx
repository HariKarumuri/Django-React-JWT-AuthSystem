import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from './../context/AuthContext';


const Header = () => {
  let {user ,logoutUser} = useContext(AuthContext)
  return (
    <div>
      {user ?  (<p onClick={logoutUser}>logout</p>) : (<Link to='/login'>Login </Link>) }
      
      <span> | </span>
      <Link to='/'>Home</Link>
      {user && <p>Welcome {user.username} </p> }
      
    </div>
  )
}

export default Header
