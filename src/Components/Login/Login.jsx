import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

import { signUp ,signIn,useAuth} from '../../firebasse'

import logo from '../../img/amazon1.png'
import './Login.css'
const Login = () => {
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false)
    const currentuser=useAuth();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    async function handleSignin(e){
        e.preventDefault();
        setLoading(true);
        try {
            
            await signIn(email,password)
            console.log("login success",currentuser)
            if(currentuser){
                navigate('/')
            }
            

        } catch (error) {
            alert(error.message)
            
        }
        setLoading(false);

    }
    async function handleSignup(e){
        e.preventDefault();
        setLoading(true);
        try {
            
            await signUp(email,password)
            console.log("successfully registered",currentuser)
            if(currentuser){
                navigate('/')
            }
            

        } catch (error) {
            alert(error.message)
            
        }
        setLoading(false)

    }
  return (
    <div className="Login">
        <img src={logo} alt="logo" className="logo" />
        <div className="login_container">
            <h1 className="login_title">
                Login Here
            </h1>
            <form className="loginform">
                <h5>Email</h5>
                <input type="text" name="email" value={email} placeholder='Enter Email Id' className="login_user" onChange={e=>setEmail(e.target.value)} />
                <h5>password</h5>
                <input type="password" name="password" value={password} placeholder='  Enter Password' className="login_user" onChange={e=>setPassword(e.target.value)} />
                <button disabled={loading} type='submit' onClick={handleSignin} className="login_signinbtn" >login here</button>
                
            </form>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque tempora. Possimus accusantium nostrum numquam provident, dicta explicabo ad, ipsum, inventore laboriosam voluptatibus corporis asperiores.</p>
            
            <button disabled={loading} onClick={handleSignup} className="login_registerbtn">create an new account</button>
        </div>
    </div>
  )
}

export default Login