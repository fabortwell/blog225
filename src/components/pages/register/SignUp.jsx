import {Link} from "react-router-dom";
import React, {useState} from 'react'
import "./signup.css"
import { signUp } from "../../../App";



const SignUp = () => {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  function handleSubmit (e) {
  e.preventDefault()
  signUp(email, password).then(res=>console.log(res))
  }
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
         <form onSubmit={handleSubmit} className="registerForm">
            {/* <label>Username</label> 
            <input type="text" className="registerInput" placeholder="Enter your username..."/>
            <label>Email</label>  */}
            <input type="text" className="registerInput" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email..." required/>
            <label>Passowrd</label> 
            <input type="password" className="registerInput" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password..." required/>
        <button className="registerButton">Register</button>
         </form>
         <button className="registerLoginButton">
           
           <Link className="link" to="/login">Login</Link>
         </button>
    </div>
  )
}

export default SignUp