import React, { useEffect, useState } from 'react';

function Login() {

  useEffect(()=>{

    return()=>{
      
    }
  },[]);

    const [username,setUsername]=useState();
    const handleUsername = (event)=>{
    setUsername(event.target.value)
    console.log("Username"+username);
    }
    const [email,setEmail]=useState();
    const handleEmail = (event)=>{
    setEmail(event.target.value)
    console.log("email:"+email);
    }
    
    const [password,setPassword]=useState();
    const handlePassword = (event)=>{
    
        setPassword(event.target.value)
        console.log("password:"+password);
      
    
    }
    function checkPassword(password){
      if (password.length<7){
        alert("password should be larger than 7");
        setPassword()
        console.log("password:"+password);
      }
    }
  return (
    <div>
    <input type="text" placeholder="username" onChange={(e)=>handleUsername(e)} />
    <input type="text" placeholder="email" onChange={(e)=>handleEmail(e)} />
    <input type="password" placeholder="password" onChange={(e)=>handlePassword(e)} />

    <input type="submit" onClick={()=>checkPassword(password)}/>

    <h1>Username: {username}</h1>
    <h1>Email: {email}</h1>
    <h1>Password: {password}</h1>

   
  </div>

  )
}

export default Login
