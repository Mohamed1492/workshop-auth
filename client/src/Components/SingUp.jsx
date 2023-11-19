import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { singUpUser } from '../redux/action';
import { Link } from 'react-router-dom';

const SingUp = () => {
    const [fullName, setFullName] = useState("test 25")
    const [email, setEmail] = useState('test25@gmail.com');
    const [password, setPassword] = useState("123456");
    const [phone, setPhone] = useState("+258255588");
    const dispatch=useDispatch()
const handleSubmit=(e)=>{
    e.preventDefault();
    const newUserOne={
        FullName:fullName,email,password,phone
    };
    dispatch(singUpUser(newUserOne))

}

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder='full Name'value={fullName} onChange={e=>setFullName(e.target.value)}  />
            <br/><br/>
            <input type="text" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} />
            <br/><br/>
            <input type="password" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />    
            <br />
            <input type="text"  placeholder='phone' value={phone} onChange={e=>setPhone(e.target.value)}  />
            <br />
            <br />
            <button type="submit">Sign Up</button>
            <Link to="/login" >
            do you already a acccount <br></br>
            go to Login</Link>
        </form>
    </div>
  )
}

export default SingUp