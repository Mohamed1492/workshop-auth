import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../redux/action';

const Profile = () => {
    const {user,loading}=useSelector(state=>state)
    const dispatch=useDispatch();
    useEffect(() => {
    dispatch(getUserProfile())
    }, [])
    
  return (
    <div>
        <h1>{user.email}</h1>
    </div>
  )
}

export default Profile