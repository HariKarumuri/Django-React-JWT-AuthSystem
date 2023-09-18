import React, { useContext } from 'react'
import AuthContext from './../context/AuthContext';



const Login = () => {
    let {loginUser} =  useContext(AuthContext)
  return (
    <div>
      <form onSubmit={loginUser}>
        <input type="text" name='username' placeholder='username' />
        <input type="password" name='password' placeholder='password'/>
        <input type="submit"  />
      </form>
    </div>
  )
}

export default Login
