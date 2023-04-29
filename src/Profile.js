import React, { useEffect } from 'react';
import './Profile.css'
import { useNavigate } from 'react-router-dom';
function Profile() {
   
    const navigate = useNavigate()
    useEffect(()=>{
        if(!window.localStorage.getItem('accessToken')){
            navigate('/')
        }
    })
    
    const handleLogout= ()=>{
        window.localStorage.clear();
        navigate('/')
    }
  return (
    <div className="profile">
      <h2>Profile</h2>
      <p>Full Name: {window.localStorage.getItem('fullname')}</p>
      <p>Email: {window.localStorage.getItem('email')}</p>
      <p>Password: {window.localStorage.getItem('password')}</p>
      <button type='button' onClick={()=>{handleLogout()}}>Logout</button>
    </div>
  );
}

export default Profile;