import React, { useEffect, useState } from 'react';
import './Signup.css'
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate();
    useEffect(()=>{
        if(window.localStorage.getItem('accessToken')){
            navigate("/profile")
        }
    })
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false)

  const handleSignup = async ()=>{
    let store = window.localStorage;
    store.setItem('fullname',fullName);
    store.setItem('email',email);
    store.setItem('password',password)
    store.setItem('accessToken',"jhgfgh.hkhgff.ghfgfg")
    setSuccess(true);
    const p = await new Promise((resolve, reject) => {
       setTimeout(()=>{
        resolve(true)
       },5000)
    })
    navigate("/profile")
    console.log("first")
    
    
  }
  

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form >
        <label>
          
          <input required placeholder='Full Name' type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <br />
        <label>
          
          <input required placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          
          <input required placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          
          <input required placeholder='Confirm Password' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <br />
        {(fullName.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '')?(<div className='message' id='error'>Error: All the fields are mandatory</div>):undefined}
        
        {(success)?(<div className='message' id='success'>Successfully signed up</div>):undefined}
        <button disabled={fullName.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === ''} type="button" onClick={()=>{handleSignup()}}>Signup</button>
        
      </form>
    </div>
  );
}

export default Signup;

