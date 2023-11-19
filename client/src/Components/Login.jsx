import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../redux/action';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
    const {user,loading}=useSelector(state=>state)

    const [email, setEmail] = useState('test25@gmail.com');
    const [password, setPassword] = useState("123456");
    const dispatch=useDispatch()
const handleSubmit=(e)=>{
    e.preventDefault();
    const user={
       email,password
    };
    dispatch(loginUser(user))

}

  return (
    <div>
        {
loading?<h1>Loading...</h1>:localStorage.getItem("token")?<Navigate to="/profile"  />:
       
        <>
        <form onSubmit={handleSubmit} >
           
            <input type="email" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} />
            <br/><br/>
            <input type="password" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />    
            <br />
           
            <br />
            <button type="submit">Login</button>
        </form>
        <Link to="/" >
            you don't have a acccount <br></br>
            go to SingUp</Link>
        </> }
    </div>
  )
}

export default Login